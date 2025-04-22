package com.sergio.crud.backend.repositories;

import com.sergio.crud.backend.entities.Vehicle;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface VehicleRepository extends MongoRepository<Vehicle, String> {
}
