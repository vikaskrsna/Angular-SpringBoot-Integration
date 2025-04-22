package com.sergio.crud.backend.repositories;

import com.sergio.crud.backend.entities.Mobile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MobileRepository extends MongoRepository<Mobile, String> {
}
