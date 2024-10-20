#import streamlit as st
#import boto3
#import pickle
#import os
#from io import BytesIO
# app.py

from flask import Flask, request, jsonify
import pickle
import os
from io import BytesIO
import boto3

app = Flask(__name__)

# S3 configuration
bucket_name = 'machinesoil'
model_file_name = 'knn_model.pkl'

# Function to download model from S3 bucket
def download_model():


    local_model_file = os.path.join(os.getcwd(), 'knn_model.pkl')
    
    # Download the model from the bucket if it doesn't already exist locally
    if not os.path.exists(local_model_file):
        with open(local_model_file, 'wb') as f:
            s3.download_fileobj(bucket_name, model_file_name, f)

    # Load the model
    with open(local_model_file, 'rb') as f:
        model = pickle.load(f)
    
    return model

# Load the model
model = download_model()

# Define a route for predicting crop
@app.route('/predict', methods=['POST'])
def predict():
    # Get JSON data from the POST request
    data = request.json

    # Extract features from the request
    N = data.get('N')
    P = data.get('P')
    K = data.get('K')
    temperature = data.get('temperature')
    humidity = data.get('humidity')
    ph = data.get('ph')
    rainfall = data.get('rainfall')

    # Create input feature array for prediction
    input_features = [[N, P, K, temperature, humidity, ph, rainfall]]

    # Perform prediction
    prediction = model.predict(input_features)

    # Return the prediction result
    return jsonify({'crop': prediction[0]})

if __name__ == '__main__':
    app.run(debug=True)

'''
# S3 configuration
bucket_name = 'machinesoil'
model_file_name = 'knn_model.pkl'  # Update the model file name to knn_model.pkl




    local_model_file = os.path.join(os.getcwd(), 'knn_model.pkl')
    
    # Download the model from the bucket if it doesn't already exist locally
    if not os.path.exists(local_model_file):
        with open(local_model_file, 'wb') as f:
            s3.download_fileobj(bucket_name, model_file_name, f)

    # Load the model
    with open(local_model_file, 'rb') as f:
        model = pickle.load(f)
    
    return model

# Load the KNN model
model = download_model()

# Streamlit UI setup
st.title('Soil Condition and Crop Prediction')

# Input fields for user
N = st.number_input('Nitrogen content in soil (N)', 0.0, 100.0, 20.0)
P = st.number_input('Phosphorous content in soil (P)', 0.0, 100.0, 20.0)
K = st.number_input('Potassium content in soil (K)', 0.0, 100.0, 20.0)
temperature = st.number_input('Temperature in °C', -10.0, 50.0, 25.0)
humidity = st.number_input('Relative Humidity (%)', 0.0, 100.0, 50.0)
ph = st.number_input('Soil pH value', 0.0, 14.0, 7.0)
rainfall = st.number_input('Rainfall (mm)', 0.0, 500.0, 100.0)

# Collect inputs for prediction
input_features = [[N, P, K, temperature, humidity, ph, rainfall]]

# Prediction button
if st.button('Predict Crop'):
    prediction = model.predict(input_features)
    st.success(f'The recommended crop is: {prediction[0]}')

def run(N,P,K,temperature,humidity,ph,rainfall){
    input_features = [[N, P, K, temperature, humidity, ph, rainfall]]
    prediction = model.predict(input_features)
    st.success(f'The recommended crop is: {prediction[0]}')
}*/'''