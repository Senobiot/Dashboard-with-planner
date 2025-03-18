export default class FurnitureScheme {
  constructor(data = {}) {
    this.id = data.id;
    this.type = data.type;
    this.width = data.width;
    this.height = data.height;
    this.x = data.x || 0;
    this.y = data.y || 0;
    this.sku = data.sku;
    this.imgSrc = data.imgSrc;
    this.angle = data.angle;
    this.name = data.name;
  }
}
