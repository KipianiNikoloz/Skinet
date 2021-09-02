namespace API.Errors
{
    public class ApiResponse
    {
        public ApiResponse(int code, string message = null)
        {
            Code = code;
            Message = message ?? GetDefaultMessage(code);
        }

        public int Code { get; set; }
        public string Message { get; set; }
        
        private string GetDefaultMessage(int code)
        {
            return code switch
            {
                400 => "The request was bad",
                401 => "Unauthorized",
                404 => "The requested resource was not found",
                500 => "A server error occured.",
                _ => null
            };
        }
    }
}