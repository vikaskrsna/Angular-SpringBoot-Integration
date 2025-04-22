package com.sergio.crud.backend.mappers;

import com.sergio.crud.backend.dtos.MobileDto;
import com.sergio.crud.backend.entities.Mobile;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;

import java.util.List;

@Mapper(componentModel = "spring")
public interface MobileMapper {

    Mobile toMobile(MobileDto mobileDto);

    MobileDto toMobileDto(Mobile mobile);

    List<MobileDto> toMobileDtos(List<Mobile> mobiles);

    void updateMobile(@MappingTarget Mobile target, Mobile source);
}
