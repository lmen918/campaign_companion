import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'RecordHall',
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class RecordHallEnterEvent extends RpgEvent {
    async onPlayerTouch(player: RpgPlayer) {
        await player.changeMap('');
    }
}