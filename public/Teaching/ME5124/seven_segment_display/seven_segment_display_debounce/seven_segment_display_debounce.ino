// ME5124 - Push-button controlled counter on a 7-segment display
// Uses a reusable SevenSegmentDisplay class + debounced button edge detection
// Assumes common-cathode 7-seg and INPUT_PULLUP on the button.

// ------------------ 7-Segment Display Class ------------------

class SevenSegmentDisplay {
public:
  // pins[0..6] = {A, B, C, D, E, F, G}
  SevenSegmentDisplay(const int pins[7]) {
    for (int i = 0; i < 7; i++) {
      segPins[i] = pins[i];
      pinMode(segPins[i], OUTPUT);
    }
  }

  void showDigit(int digit) {
    if (digit < 0 || digit > 9) return;
    byte pattern = digitPatterns[digit];

    for (int i = 0; i < 7; i++) {
      bool segmentOn = pattern & (1 << i); // bit i -> segment i
      digitalWrite(segPins[i], segmentOn ? HIGH : LOW);
    }
  }

  void clear() {
    for (int i = 0; i < 7; i++) {
      digitalWrite(segPins[i], LOW);
    }
  }

private:
  int segPins[7];

  // Bit 0 -> A, 1 -> B, ..., 6 -> G
  // 1 = ON, 0 = OFF  (for common-cathode)
  static const byte digitPatterns[10];
};

const byte SevenSegmentDisplay::digitPatterns[10] = {
  B00111111,  // 0: A B C D E F
  B00000110,  // 1: B C
  B01011011,  // 2: A B D E G
  B01001111,  // 3: A B C D G
  B01100110,  // 4: B C F G
  B01101101,  // 5: A C D F G
  B01111101,  // 6: A C D E F G
  B00000111,  // 7: A B C
  B01111111,  // 8: A B C D E F G
  B01101111   // 9: A B C D F G
};

// ------------------ Pin Configuration ------------------

// Segment pins (update to match your wiring)
const int segPins[7] = {2, 3, 4, 5, 6, 7, 8}; // A, B, C, D, E, F, G

// Push button pin
const int buttonPin = 9;   // button between pin 9 and GND

// Create display object
SevenSegmentDisplay display(segPins);

// ------------------ Button Debounce State ------------------

int countValue = 0;

// For debouncing
int buttonState        = HIGH;  // stable debounced state (HIGH = not pressed, with INPUT_PULLUP)
int lastButtonReading  = HIGH;  // last raw reading
unsigned long lastDebounceTime = 0;
const unsigned long debounceDelayMs = 30;  // debounce window

// ------------------ Setup & Loop ------------------

void setup() {
  // Button with internal pull-up; pressed = LOW
  pinMode(buttonPin, INPUT_PULLUP);

  // Initialize display
  display.showDigit(countValue);
}

void loop() {
  // 1. Read raw button state
  int reading = digitalRead(buttonPin);

  // 2. If the reading changed, reset debounce timer
  if (reading != lastButtonReading) {
    lastDebounceTime = millis();
  }

  // 3. After debounceDelayMs of stable reading, accept it as the new state
  if ((millis() - lastDebounceTime) > debounceDelayMs) {
    // Has the debounced state actually changed?
    if (reading != buttonState) {
      buttonState = reading;

      // 4. Detect *edge*: button just went from HIGH -> LOW (pressed)
      if (buttonState == LOW) {
        // Button press event: increment and update display
        countValue = (countValue + 1) % 10;
        display.showDigit(countValue);
      }
    }
  }

  // 5. Remember for next loop iteration
  lastButtonReading = reading;
}