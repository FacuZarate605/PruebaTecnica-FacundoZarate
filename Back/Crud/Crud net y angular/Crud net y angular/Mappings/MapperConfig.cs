using AutoMapper;
using Crud_net_y_angular.Dtos;
using Crud_net_y_angular.Models;
using Crud_net_y_angular.Services;

namespace Crud_net_y_angular.Mappings
{
    public class MapperConfig : Profile
    {
        public MapperConfig()
        {
            #region UserEntity
            CreateMap<UserEntity, UserDto>().ReverseMap();
            #endregion
        }
    }
}
