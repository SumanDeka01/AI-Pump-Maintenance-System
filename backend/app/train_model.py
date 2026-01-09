import pandas as pd
import time
import pickle

from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

print("Loading dataset...")

# Load CSV
data = pd.read_csv("pump_data.csv")

# Features and target
X = data.drop(["pump_id", "fail"], axis=1)
y = data["fail"]

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

print("Training model...")

# Start timing
start_time = time.time()

# Model
model = RandomForestClassifier(
    n_estimators=100,
    random_state=42
)
model.fit(X_train, y_train)

# End timing
end_time = time.time()

# Accuracy
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)

print("Model Accuracy:", accuracy)
print("Training Time (seconds):", end_time - start_time)

# Save model
with open("pump_failure_model.pkl", "wb") as f:
    pickle.dump(model, f)

print("Model saved as pump_failure_model.pkl")
