using Core.Entities;
using Core.Specifications.Base;

namespace Core.Specifications
{
    public class ProductsWithFiltersCountSpecification : BaseSpecification<Product>
    {
        public ProductsWithFiltersCountSpecification(ProductParams productParams) : base(x =>
            (string.IsNullOrEmpty(productParams.Search) || x.Name.ToLower().Contains(productParams.Search)) &&
            (!productParams.BrandId.HasValue || x.ProductBrandId == productParams.BrandId) &&
            (!productParams.TypeId.HasValue || x.ProductTypeId == productParams.TypeId)
        )
        {
            
        }
    }
}