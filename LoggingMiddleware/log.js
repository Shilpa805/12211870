export async function Log(stack, level, pkg, message, token) {
  const url = "http://29.244.56.144/evaluation-service/logs"

  const payload = {
    stack: stack,
    level: level,
    package: pkg,
    message: message
  }

  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${token}`
    },
    body: JSON.stringify(payload)
  })

  if (!res.ok) {
    console.error("Logging failed:", res.statusText)
  } else {
    console.log("Log created successfully")
  }
}
