# Use a JDK base image
# 🧱 Stage 1: Build the application using Maven
FROM maven:3.9.5-eclipse-temurin-17 AS builder

WORKDIR /app

# Copy pom.xml and download dependencies (leverages Docker cache)
COPY pom.xml .
RUN mvn dependency:go-offline

# Copy the rest of the source code
COPY . .

# Build the application, skipping tests for faster builds (optional)
RUN mvn clean install -DskipTests

# 🧱 Stage 2: Create a minimal image using a lightweight JDK
FROM eclipse-temurin:17-jre

# Set working directory
WORKDIR /app

# Copy the JAR file from the builder stage
COPY --from=builder /app/target/backend.jar app.jar

# Expose the application's port (change if needed)
EXPOSE 8080

# Run the application
ENTRYPOINT ["java", "-jar", "app.jar"]

