using API.Dtos;
using AutoMapper;
using Core.Entities;

namespace API.Helpers
{
    public class AutoMapperProfiles : Profile
    {
        public AutoMapperProfiles()
        {
            CreateMap<Product, ProductToReturnDto>()
                .ForMember(src => src.ProductType,
                    opt =>
                        opt.MapFrom(src => src.ProductType.Name))
                .ForMember(src => src.ProductBrand,
                    opt =>
                        opt.MapFrom(src => src.ProductBrand.Name))
                .ForMember(src => src.PictureUrl,
                    opt =>
                        opt.MapFrom<ProductUrlResolver>());
        }
    }
}