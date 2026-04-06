using Data;
using Microsoft.EntityFrameworkCore;
using Routes;
using DotNetEnv;
using Microsoft.AspNetCore.Authentication.Cookies;
using System.Security.Claims;
using Constants;

Env.Load(); //carreega o arquivo .env

WebApplicationBuilder builder = WebApplication.CreateBuilder(); //Cria o construtor da API
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection"); //Pega a configuração de conexão do banco de dados

// Variáveis de ambiente
var dbPassword = Environment.GetEnvironmentVariable("DATABASE_PASSWORD");
var dbServer = Environment.GetEnvironmentVariable("DATABASE_SERVER");
var dbPort = Environment.GetEnvironmentVariable("DATABASE_PORT");
var dbName = Environment.GetEnvironmentVariable("DATABASE_NAME");
var dbUserAdmin = Environment.GetEnvironmentVariable("DATABASE_USERADMIN");

// Substitui o placeholder pelo valor real
connectionString = connectionString?.Replace("{DATABASE_PASSWORD}", dbPassword);
connectionString = connectionString?.Replace("{DATABASE_SERVER}", dbServer);
connectionString = connectionString?.Replace("{DATABASE_PORT}", dbPort);
connectionString = connectionString?.Replace("{DATABASE_NAME}", dbName);
connectionString = connectionString?.Replace("{DATABASE_USERADMIN}", dbUserAdmin);

// Adiciona o contexto do banco de dados e conecta com o mesmo
builder.Services.AddDbContext<ConsultorioDbContext>(options =>
  options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

//Configuração do cookie
builder.Services.AddAuthentication(CookieAuthenticationDefaults.AuthenticationScheme).AddCookie(options =>
{
  options.Cookie.Name = "access"; //Nome do cookie
  options.Events.OnRedirectToLogin = context =>
  {
    context.Response.StatusCode = 401;
    return Task.CompletedTask;
  }; // Retorna erro 401 caso usuário não esteja autenticado
  options.ExpireTimeSpan = TimeSpan.FromHours(2); //duração da sessão
  options.Cookie.HttpOnly = true; // Impede que o JS leia o cookie
  options.Cookie.SameSite = SameSiteMode.Strict; // Protege contra CSRF
  options.Cookie.SecurePolicy = builder.Environment.IsDevelopment()
    ? CookieSecurePolicy.SameAsRequest
    : CookieSecurePolicy.Always; // Garante que funcione somente via HTTPS
});

builder.Services.AddAuthorization(options =>
{
  options.AddPolicy("AdminOnly", policy => policy.RequireClaim(ClaimTypes.Role, Roles.Admin)); //Rotas com este Require somente irão ser acessadas pelo admin
  options.AddPolicy("AtendenteOrAdmin", policy => policy.RequireAssertion(context =>
    context.User.HasClaim(ClaimTypes.Role, Roles.Admin)
    || context.User.HasClaim(ClaimTypes.Role, Roles.Atendente)
  )); //Rotas com esse require poderão ser acessadas pelo atendente ou admin
});

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApiDocument(config =>
{
  config.DocumentName = "AgendamentoAPI";
  config.Title = "AgendamentoAPI v1";
  config.Version = "v1";
});

//Configuração do Cors
builder.Services.AddCors(options =>
{
  options.AddPolicy("myAllowSpecificOrigins", policy =>
  {
    policy.WithOrigins("http://localhost:3000").AllowAnyHeader().AllowAnyMethod().AllowCredentials();
  });
});

WebApplication app = builder.Build(); // Constroi a aplicação
app.UseExceptionHandler("/error");

app.UseCors("myAllowSpecificOrigins"); // Ativa a política de Cors
app.UseAuthentication(); // Lê o cookie e preenche o ClaimsPrincipal
app.UseAuthorization(); // Verifica o .RequireAutorization()



//Configuração do Swagger
if (app.Environment.IsDevelopment())
{
  app.UseOpenApi();
  app.UseSwaggerUi(config =>
  {
    config.DocumentTitle = "AgendamentoAPI";
    config.Path = "/swagger";
    config.DocumentPath = "/swagger/{documentName}/swagger.json";
    config.DocExpansion = "list";
  });
}

// Rotas GET
app.MapGet("/users/{id}", UserRoute.GetUserById).RequireCors("myAllowSpecificOrigins");
app.MapGet("/services", ServiceRoute.GetAllServices).RequireCors("myAllowSpecificOrigins");
app.MapGet("/services/{id}", ServiceRoute.GetServiceById).RequireCors("myAllowSpecificOrigins");
app.MapGet("/agendamentos", AgendaRoute.GetAllAgendamentos).RequireAuthorization("AtendenteOrAdmin").RequireCors("myAllowSpecificOrigins");
app.MapGet("/agendamentos/user/{user_id}", AgendaRoute.GetAgendamentoByUser).RequireAuthorization().RequireCors("myAllowSpecificOrigins");
app.MapGet("/agendamentos/service/{service_id}", AgendaRoute.GetAgendamentoByService).RequireAuthorization().RequireCors("myAllowSpecificOrigins");
app.MapGet("/agendamentos/data/{date}", AgendaRoute.GetAgendamentosByDate).RequireAuthorization().RequireCors("myAllowSpecificOrigins");
app.MapGet("/users/me", UserRoute.GetUserLogged).RequireAuthorization().RequireCors("myAllowSpecificOrigins");

// Rotas POST
app.MapPost("/users/register", UserRoute.CreateUser).RequireCors("myAllowSpecificOrigins");
app.MapPost("/users/login", UserRoute.LoginUser).RequireCors("myAllowSpecificOrigins");
app.MapPost("/services", ServiceRoute.CreateService).RequireAuthorization("AdminOnly").RequireCors("myAllowSpecificOrigins");
app.MapPost("/agendamentos", AgendaRoute.CreateAgendamento).RequireAuthorization().RequireCors("myAllowSpecificOrigins");
app.MapPost("/roles", RoleRoute.CreateRole).RequireAuthorization("AdminOnly").RequireCors("myAllowSpecificOrigins");

// Rotas PATCH
app.MapPatch("/services/{id}", ServiceRoute.UpdateService).RequireAuthorization("AdminOnly").RequireCors("myAllowSpecificOrigins");
app.MapPatch("/users/{id}", UserRoute.UpdateUser).RequireAuthorization().RequireCors("myAllowSpecificOrigins");
app.MapPatch("/roles/{id}", RoleRoute.ChangeRoleName).RequireAuthorization("AdminOnly").RequireCors("myAllowSpecificOrigins");
app.MapPatch("/agendamentos/{id}", AgendaRoute.ChangeDateTimeAgendamento).RequireAuthorization().RequireCors("myAllowSpecificOrigins");

// Rotas DELETE
app.MapDelete("/services/{id}", ServiceRoute.DeleteService).RequireAuthorization("AdminOnly").RequireCors("myAllowSpecificOrigins");
app.MapDelete("/users/{id}", UserRoute.DeleteUser).RequireAuthorization().RequireCors("myAllowSpecificOrigins");
app.MapDelete("/agendamentos/{id}", AgendaRoute.DeleteAgendamento).RequireAuthorization().RequireCors("myAllowSpecificOrigins");
app.MapDelete("/roles/{id}", RoleRoute.DeleteRole).RequireAuthorization("AdminOnly").RequireCors("myAllowSpecificOrigins");

app.Run(); //inicia a aplicação