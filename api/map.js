const API_KEY = 'c4dceb7485a94d408a9b4e9b6d99738c';

export function getStaticMapUrl({lat, long}) {
    return `https://maps.geoapify.com/v1/staticmap?style=osm-bright&width=600&height=400&center=lonlat:${long},${lat}&zoom=15.9955&marker=lonlat:${long},${lat};type:material;color:%23ff3421;icontype:awesome&apiKey=${API_KEY}`;
}
