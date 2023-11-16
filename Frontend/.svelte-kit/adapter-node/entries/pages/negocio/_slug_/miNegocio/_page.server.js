const load = async () => {
  try {
    const responseBusiness = await fetch("https://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include"
      },
      body: JSON.stringify({
        name_business,
        address,
        phone,
        business_type,
        id_user,
        opening_hours,
        closiing_hours
      })
    });
    const responseSocialMedia = await fetch("https://localhost:8000/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        credentials: "include"
      },
      body: JSON.stringify({
        media_name,
        user_name,
        link
      })
    });
    const { data: responseBusinessData } = await responseBusiness.json();
    const { data: responseSocialMediaData } = await responseSocialMedia.json();
    return { ...responseBusinessData }, { ...responseSocialMediaData };
  } catch (e) {
    console.error("no funcó papá");
  }
};
export {
  load
};
