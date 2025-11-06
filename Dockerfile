# This Dockerfile is a placeholder for Cloud Build trigger
# The actual build process is defined in cloudbuild.yaml
# 
# If you see this file being used, please update your Cloud Build trigger to use cloudbuild.yaml instead:
# Configuration Type: Cloud Build configuration file (yaml or json)
# Location: Repository
# Cloud Build configuration file location: cloudbuild.yaml

FROM alpine:latest

RUN echo "ERROR: This Dockerfile should not be used directly."
RUN echo "Please configure your Cloud Build trigger to use cloudbuild.yaml instead."
RUN echo "See CLOUD_BUILD_SETUP.md for instructions."
RUN exit 1

