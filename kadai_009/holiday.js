const holidays = [
  "正月", "成人の日", "建国記念日", "天皇誕生日", "春分の日", "昭和の日", 
  "憲法記念日", "みどりの日", "こどもの日", "海の日", "山の日", 
  "敬老の日", "秋分の日", "スポーツの日", "文化の日", "労働感謝の日" 
]


let i = 0;


console.log(holidays);


for (let holidays = 1; holidays <= 16; holidays++) {
  console.log(holidays);
}


while (i < holidays.length) {
  console.log(holidays[i]);
  i++;
}
