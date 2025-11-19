// ME5124 - Continuous 0–9 counter on a 7-segment display (common cathode)
// Alternative method 2

class SevenSegmentDisplay {
public:
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
      bool segmentOn = pattern & (1 << i);
      digitalWrite(segPins[i], segmentOn ? HIGH : LOW);
    }
  }

private:
  int segPins[7];

  // Same patterns as above:
  static const byte digitPatterns[10];
};

const byte SevenSegmentDisplay::digitPatterns[10] = {
  B00111111,  // 0
  B00000110,  // 1
  B01011011,  // 2
  B01001111,  // 3
  B01100110,  // 4
  B01101101,  // 5
  B01111101,  // 6
  B00000111,  // 7
  B01111111,  // 8
  B01101111   // 9
};

// ===== Sketch code starts here =====

// Segment pins
const int segPins[7] = {2, 3, 4, 5, 6, 7, 8};

SevenSegmentDisplay display(segPins);
const unsigned long stepDelayMs = 1000;
int currentDigit = 0;

void setup() {
  display.showDigit(currentDigit);
}

void loop() {
  delay(stepDelayMs);
  currentDigit = (currentDigit + 1) % 10;
  display.showDigit(currentDigit);
}