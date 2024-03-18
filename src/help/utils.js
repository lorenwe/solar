export function calcTimeDiff(startTime, endTime) {
  const start = new Date()
  const end = new Date()

  // 将时间字符串转换为 Date 对象
  const [startHour, startMinute] = startTime.split(':')
  const [endHour, endMinute] = endTime.split(':')

  start.setHours(startHour, startMinute, 0)
  end.setHours(endHour, endMinute, 0)

  // 计算时间间隔（毫秒为单位）
  const timeDiff = end.getTime() - start.getTime()

  // 将毫秒转换为小时和分钟
  const hours = Math.floor(timeDiff / (1000 * 60 * 60))
  const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60))

  return {
    hours,
    minutes,
  }
}

export function hideDom(id) {
  let div = document.getElementById(id);
  let opacity = 1;
  let interval = setInterval(function() {
    if (opacity <= 0) {
      clearInterval(interval);
      div.style.display = 'none'; // 消失后隐藏div
    }
    div.style.opacity = opacity;
    opacity -= 0.2; // 每次减少0.1的透明度
  }, 100); // 每100毫秒执行一次
}

