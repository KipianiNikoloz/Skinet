using API.Controllers.Base;
using API.Errors;
using Infrastructure.Data;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class ErrorController : BaseApiController
    {
        private readonly StoreContext _context;

        public ErrorController(StoreContext context)
        {
            _context = context;
        }

        [HttpGet("notfound")]
        public ActionResult GetNotFound()
        {
            var obj = _context.Products.Find(42);

            if (obj == null)
            {
                return NotFound(new ApiResponse(404));
            }
            
            return Ok();
        }        
        
        [HttpGet("servererror")]
        public ActionResult GetServerError()
        {
            var obj = _context.Products.Find(42);

            var str = obj.ToString();

            return Ok();
        } 
        
        [HttpGet("badrequest")]
        public ActionResult GetBadRequest()
        {
            return BadRequest(new ApiResponse(400));
        } 
        
        [HttpGet("notfound/{id}")]
        public ActionResult GetValidationError(int id)
        {
            return Ok();
        }

    }
}