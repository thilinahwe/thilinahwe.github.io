// ME5124 - LM35 Temperature Sensing Example
// Original student solution (with minor formatting clean-up)

// Pin configuration
const int sensorPin = A0;        // LM35 output connected to A0
const float referenceVoltage = 5.0;  // ADC reference voltage (adjust if measured)

// Sampling period in milliseconds
const unsigned long samplePeriodMs = 1000; // 1 second

unsigned long lastSampleTime = 0;

void setup() {
  Serial.begin(9600);
  while (!Serial) {
    ; // wait for serial port to connect (for some boards)
  }

  Serial.println("ME5124 - LM35 Temperature Monitor");
  Serial.println("Time(s)\tTemp_C");
}

void loop() {
  unsigned long now = millis();

  // Sample every samplePeriodMs
  if (now - lastSampleTime >= samplePeriodMs) {
    lastSampleTime = now;

    // Read raw ADC value
    int raw = analogRead(sensorPin);

    // Convert to voltage
    float voltage = (raw / 1023.0) * referenceVoltage;

    // LM35: 10 mV / °C  => 0.01 V per °C
    float temperatureC = voltage / 0.01;

    // Convert millis to seconds
    float timeSeconds = now / 1000.0;

    // Print in tabular form
    Serial.print(timeSeconds, 2);
    Serial.print("\t");
    Serial.println(temperatureC, 2);
  }
}