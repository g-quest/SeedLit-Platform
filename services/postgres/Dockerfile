# Use the official PostgreSQL image as the base image
FROM postgres:16
LABEL project=seedlit

# Set environment variables
ENV POSTGRES_DB seedlit
ENV POSTGRES_USER postgres
ENV POSTGRES_PASSWORD securepassword
ENV POSTGRES_DATABASES seedlit

# Update package lists
RUN apt-get update

# Install PostgreSQL extensions
RUN apt-get install -y --no-install-recommends \
    postgresql-contrib \
    postgresql-16-postgis

# Clean up
RUN rm -rf /var/lib/apt/lists/*

# Optionally, you can include custom initialization scripts
# COPY init.sql /docker-entrypoint-initdb.d/

# Expose the PostgreSQL port
EXPOSE 5432
    