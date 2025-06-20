import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'TavernOwner',
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class TavernOwnerEvent extends RpgEvent {
    onInit() {
        this.setGraphic('female')
    }
}