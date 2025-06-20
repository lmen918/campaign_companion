import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'GuildHall',
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class GuildHallEnterEvent extends RpgEvent {
    async onPlayerTouch(player: RpgPlayer) {
        await player.changeMap('');
    }
}