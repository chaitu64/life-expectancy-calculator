import tensorflow as tf
from google.cloud import aiplatform

# Replace with your project ID, region, and model ID
project_id = "your-project-id"
region = "us-central1"
model_id = "your-model-id"

# Create an AI Platform client
client = aiplatform.gapic.PredictionServiceClient()

# Set the endpoint and instance
endpoint = f"projects/{project_id}/locations/{region}/endpoints/{model_id}"
instance = {"age": 30, "gender": "male", "height": 175, "weight": 75, "activity_level": "sedentary"}

# Make a prediction request
response = client.predict(endpoint=endpoint, instances=[instance])

# Extract the prediction result
prediction = response.results[0].predictions
print(prediction)