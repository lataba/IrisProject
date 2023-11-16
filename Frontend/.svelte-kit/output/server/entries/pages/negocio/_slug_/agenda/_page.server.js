const load = async () => {
  try {
    const response = await fetch("https://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include"
      },
      body: JSON.stringify({
        startTime,
        endTime,
        client,
        colaborator,
        service
      })
    });
    const { data: respondeData } = await response.json();
    return { ...respondeData };
  } catch (e) {
    console.error("no funcó papá");
  }
};
export {
  load
};
