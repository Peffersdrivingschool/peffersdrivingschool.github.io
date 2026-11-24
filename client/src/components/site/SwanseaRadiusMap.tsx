const fallbackMapUrl =
  "https://www.google.com/maps?q=51.72%2C-3.92&z=10&output=embed";

export function SwanseaRadiusMap() {
  return (
    <iframe
      className="google-map-frame"
      src={fallbackMapUrl}
      title="Google map of the Swansea teaching area"
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    />
  );
}
