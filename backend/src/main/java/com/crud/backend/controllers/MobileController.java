package com.crud.backend.controllers;

import com.crud.backend.dtos.MobileDto;
import com.crud.backend.services.MobileService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import java.net.URI;
import java.util.List;

@RestController
@RequiredArgsConstructor
public class MobileController {

    private final MobileService mobileService;

    @GetMapping("/mobiles")
    public ResponseEntity<List<MobileDto>> allMobiles() {
        return ResponseEntity.ok(mobileService.allMobiles());
    }

    @PostMapping("/mobiles")
    public ResponseEntity<MobileDto> createMobile(@Valid @RequestBody MobileDto mobileDto) {
        MobileDto createdMobile = mobileService.createMobile(mobileDto);
        return ResponseEntity.created(URI.create("/mobiles/" + mobileDto.getId())).body(createdMobile);
    }

    @GetMapping("/mobiles/{id}")
    public ResponseEntity<MobileDto> getMobile(@PathVariable String id) {
        return ResponseEntity.ok(mobileService.getMobile(id));
    }

    @PutMapping("/mobiles/{id}")
    public ResponseEntity<MobileDto> updateMobile(@PathVariable String id, @Valid @RequestBody MobileDto mobileDto) {
        return ResponseEntity.ok(mobileService.updateMobile(id, mobileDto));
    }

    @PatchMapping("/mobiles/{id}")
    public ResponseEntity<MobileDto> patchMobile(@PathVariable String id, @RequestBody MobileDto mobileDto) {
        return ResponseEntity.ok(mobileService.patchMobile(id, mobileDto));
    }

    @DeleteMapping("/mobiles/{id}")
    public ResponseEntity<MobileDto> deleteMobile(@PathVariable String id) {
        return ResponseEntity.ok(mobileService.deleteMobile(id));
    }
}
