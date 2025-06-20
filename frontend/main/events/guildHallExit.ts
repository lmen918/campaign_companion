import { RpgEvent, EventData, RpgPlayer } from '@rpgjs/server'

@EventData({
    name: 'GuildHallExit',
    hitbox: {
        width: 32,
        height: 16
    }
})

export default class GuildHallExitEvent extends RpgEvent {
    async onPlayerTouch(player: RpgPlayer) {
        await player.changeMap('');
    }
}