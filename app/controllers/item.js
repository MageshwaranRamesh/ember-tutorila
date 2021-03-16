import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class ItemController extends Controller {
  @tracked color = this.model.colors[0].color;
  @tracked is_zoomed = false;
  get productimg() {
    return this.model.colors.find(({ color }) => color == this.color).image;
  }
  @action
  onColorChange(newcolor) {
    this.color = newcolor
  }
  @action
  toggleZoom() {
    this.is_zoomed = !this.is_zoomed;
  }
}
