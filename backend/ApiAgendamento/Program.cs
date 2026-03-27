using Data;
using Microsoft.EntityFrameworkCore;
using Routes;
using DotNetEnv;

Env.Load();

WebApplicationBuilder builder = WebApplication.CreateBuilder();
var connectionString = builder.Configuration.GetConnectionString("DefaultConnection");

// Busca o valor da variável de ambiente real
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

builder.Services.AddDbContext<ConsultorioDbContext>(options =>
  options.UseMySql(connectionString, ServerVersion.AutoDetect(connectionString)));
builder.Services.AddDatabaseDeveloperPageExceptionFilter();

builder.Services.AddEndpointsApiExplorer();
builder.Services.AddOpenApiDocument(config =>
{
  config.DocumentName = "AgendamentoAPI";
  config.Title = "AgendamentoAPI v1";
  config.Version = "v1";
});

WebApplication app = builder.Build();
app.UseHttpMethodOverride();

app.UseOpenApi();
  app.UseSwaggerUi(config =>
  {
    config.DocumentTitle = "AgendamentoAPI";
    config.Path = "/swagger";
    config.DocumentPath = "/swagger/{documentName}/swagger.json";
    config.DocExpansion = "list";
  });

app.MapGet("/users/{id}", UserRoute.GetUserById);
app.MapGet("/services", ServiceRoute.GetAllServices);
app.MapGet("/services/{id}", ServiceRoute.GetServiceById);
app.MapGet("/agendamentos", AgendaRoute.GetAllAgendamentos);
app.MapGet("/agendamentos/user/{user_id}", AgendaRoute.GetAgendamentoByUser);
app.MapGet("/agendamentos/service/{service_id}", AgendaRoute.GetAgendamentoByService);
app.MapGet("/agendamentos/data/{date}", AgendaRoute.GetAgendamentosByDate);

app.MapPost("/users/register", UserRoute.CreateUser);
app.MapPost("/users/login", UserRoute.LoginUser);
app.MapPost("/services", ServiceRoute.CreateService);
app.MapPost("/agendamentos", AgendaRoute.CreateAgendamento);
app.MapPost("/role", RoleRoute.CreateRole);

app.MapPut("/agendamentos/{id}", AgendaRoute.ChangeDateTimeAgendamento);
app.MapPut("/roles/{id}", RoleRoute.ChangeRoleName);

app.MapPatch("/services/{id}", ServiceRoute.UpdateService);
app.MapPatch("/users/{id}", UserRoute.UpdateUser);

app.MapDelete("/services/{id}", ServiceRoute.DeleteService);
app.MapDelete("/users/{id}", UserRoute.DeleteUser);
app.MapDelete("/agendamentos/{id}", AgendaRoute.DeleteAgendamento);
app.MapDelete("/roles/{id}", RoleRoute.DeleteRole);

app.Run();
