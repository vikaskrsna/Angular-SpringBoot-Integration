package com.crud.backend.repositories;

import com.crud.backend.entities.Mobile;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MobileRepository extends MongoRepository<Mobile, String> {
}
