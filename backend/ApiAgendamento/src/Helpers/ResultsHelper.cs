using Wrappers;

namespace Helpers
{
  public static class ResultsHelper
  {
    public static IResult Success<T>(T data, string message = "")
    {
      return Results.Ok(new ApiResponse<T>(true, data, message));
    }

    public static IResult Created<T>(T data, int id, string route, string message = "")
    {
      return Results.Created(
        $"{route}/{id}", 
        new ApiResponse<T>(true, data, message)
      );
    }

    public static IResult BadRequest(string message)
    {
      return Results.Json(new ApiResponse<object>(false, null, message), statusCode: 400);
    }

    public static IResult NotFound(string message)
    {
      return Results.Json(new ApiResponse<object>(false, null, message), statusCode: 404);
    }

    public static IResult Unauthorized(string message)
    {
      return Results.Json(new ApiResponse<object>(false, null, message), statusCode: 401);
    }

    public static IResult Forbidden(string message)
    {
      return Results.Json(new ApiResponse<object>(false, null, message), statusCode: 403);
    }

    public static IResult Conflict(string message)
    {
      return Results.Json(new ApiResponse<object>(false, null, message), statusCode: 409);
    }
  }
}