import joblib
from sklearn.ensemble import RandomForestClassifier
import numpy as np

# dummy training data (replace later with real sensor data)
X = np.array([
    [60, 0.3, 3.1],
    [90, 1.2, 5.5],
    [75, 0.6, 4.0],
    [110, 1.8, 6.8]
])

y = np.array([0, 1, 0, 1])  # 0 = normal, 1 = failure

model = RandomForestClassifier()
model.fit(X, y)

joblib.dump(model, "pump_failure_model.pkl")


print("✅ Model saved successfully")
print("✅ Training completed")
