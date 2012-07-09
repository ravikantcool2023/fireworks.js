/**
 * Shortcut to create Fireworks.EffectRandomDriftVelocity
*/
Fireworks.EffectsStackBuilder.prototype.acceleration	= function(shape)
{
	var emitter	= this._emitter;
	
	Fireworks.createEffect('Acceleration', {
		shape	: shape
	}).onCreate(function(particle){
		particle.set('acceleration', {
			vector	: new Fireworks.Vector()
		});
	}).onBirth(function(particle){
		var acceleration= particle.get('acceleration').vector;
		this.opts.shape.randomPoint(acceleration)
	}).onUpdate(function(particle){
		var velocity	= particle.get('velocity').vector;
		var acceleration= particle.get('acceleration').vector;
		velocity.addSelf(acceleration)
	}).pushTo(emitter);

	return this;	// for chained API
};