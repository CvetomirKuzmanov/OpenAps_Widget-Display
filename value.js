let url = "https://backend-production-151b.up.railway.app/";
let req = new Request(url);

async function fetchData() {
  let html = await req.loadString();
  let numbers = html.trim().split(/\s+/);
  if (numbers.length < 2) {
    return ["N/A", "0"];
  }
  return [numbers[0], numbers[1]];
}

function getArrowSymbol(value) {
  switch (parseInt(value)) {
    case 1: return "↑↑";
    case 2: return "↑";
    case 3: return "↗";
    case 4: return "→";
    case 5: return "↘";
    case 6: return "↓";
    case 7: return "↓↓";
    default: return "—";
  }
}

function getTextColor(value) {
  let num = parseInt(value);
  if (num >= 4 && num <= 8.4) return new Color("#00ff00");
  if ((num >= 3 && num <= 3.9) || (num >= 8.3 && num <= 14.9)) return new Color("#ffff00");
  return new Color("#ff0000");
}

async function buildWidget() {
  let widget = new ListWidget();
  widget.backgroundColor = new Color("#000000");

  let [firstNumber, secondNumber] = await fetchData();
  let arrowSymbol = getArrowSymbol(secondNumber);
  let textColor = getTextColor(firstNumber);

  let logoStack = widget.addStack();
  logoStack.layoutHorizontally();
  logoStack.setPadding(0, 0, 0, 0);

  logoStack.addSpacer(5);

  let valueText = logoStack.addText(firstNumber + " " + arrowSymbol);
  valueText.textColor = textColor;
  valueText.font = Font.boldSystemFont(31);
  valueText.leftAlignText();

  return widget;
}

let widget = await buildWidget();

if (config.runsInWidget) {
  widget.refreshAfterDate = new Date(Date.now() + 1000);
  Script.setWidget(widget);
} else {
  await widget.presentSmall();
}

Script.complete()

widget.presentSmall()