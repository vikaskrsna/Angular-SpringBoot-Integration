package com.sergio.crud.backend.services;

import com.sergio.crud.backend.dtos.MobileDto;
import com.sergio.crud.backend.entities.Mobile;
import com.sergio.crud.backend.exceptions.AppException;
import com.sergio.crud.backend.mappers.MobileMapper;
import com.sergio.crud.backend.repositories.MobileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class MobileService {

    private final MobileRepository mobileRepository;
    private final MobileMapper mobileMapper;

    public List<MobileDto> allMobiles() {
        return mobileMapper.toMobileDtos(mobileRepository.findAll());
    }

    public MobileDto createMobile(MobileDto mobileDto) {
        Mobile mobile = mobileMapper.toMobile(mobileDto);

        Mobile savedMobile = mobileRepository.save(mobile);

        return mobileMapper.toMobileDto(savedMobile);
    }

    public MobileDto updateMobile(String id, MobileDto mobileDto) {
        Mobile mobile = mobileRepository.findById(id)
                .orElseThrow(() -> new AppException("Mobile not found", HttpStatus.NOT_FOUND));

        mobileMapper.updateMobile(mobile, mobileMapper.toMobile(mobileDto));

        Mobile savedMobile = mobileRepository.save(mobile);

        return mobileMapper.toMobileDto(savedMobile);
    }

    public MobileDto patchMobile(String id, MobileDto mobileDto) {
        Mobile mobile = mobileRepository.findById(id)
                .orElseThrow(() -> new AppException("Mobile not found", HttpStatus.NOT_FOUND));

        if (mobileDto.getBrand() != null) {
            mobile.setBrand(mobileDto.getBrand());
        }
        if (mobileDto.getModel() != null) {
            mobile.setModel(mobileDto.getModel());
        }
        if (mobileDto.getYear() != 0) {
            mobile.setYear(mobileDto.getYear());
        }
        if (mobileDto.getColor() != null) {
            mobile.setColor(mobileDto.getColor());
        }

        Mobile savedMobile = mobileRepository.save(mobile);

        return mobileMapper.toMobileDto(savedMobile);
    }

    public MobileDto deleteMobile(String id) {
        Mobile mobile = mobileRepository.findById(id)
                .orElseThrow(() -> new AppException("Mobile not found", HttpStatus.NOT_FOUND));
        MobileDto mobileDto = mobileMapper.toMobileDto(mobile);

        mobileRepository.deleteById(id);

        return mobileDto;
    }

    public MobileDto getMobile(String id) {
        Mobile mobile = mobileRepository.findById(id)
                .orElseThrow(() -> new AppException("Mobile not found", HttpStatus.NOT_FOUND));
        return mobileMapper.toMobileDto(mobile);
    }
}
