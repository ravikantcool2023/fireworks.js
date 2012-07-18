//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

Fireworks.EffectsStackBuilder	= function(emitter){
	this._emitter	= emitter;
};

Fireworks.EffectsStackBuilder.prototype.back	= function(){
	return this._emitter;
}

Fireworks.EffectsStackBuilder.prototype.createEffect	= function(name, opts){
	return Fireworks.createEffect(name, opts).pushTo(this._emitter).back(this);
}

//////////////////////////////////////////////////////////////////////////////////
//										//
//////////////////////////////////////////////////////////////////////////////////

/**
 * Basic Fireworks.Effect builder
*/
Fireworks.createEffect	= function(name, opts){
	// handle polymophism
	if( typeof(name) === 'object' ){
		opts	= name;
		name	= undefined;
	}
	
	var effect	= new Fireworks.Effect();
	effect.opts	= opts;
	effect.name	= name;
	effect.back	= null;
	var methods	= {
		onCreate: function(val){
			effect.onCreate	= val;
			return methods;
		},
		onBirth: function(val){
			effect.onBirth	= val;
			return methods;
		},
		onUpdate: function(val){
			effect.onUpdate	= val;
			return methods;
		},
		onDeath: function(val){
			effect.onDeath	= val;
			return methods;
		},
		onPreRender: function(val){
			effect.onPreRender	= val;
			return methods;
		},
		onRender: function(val){
			effect.onRender	= val;
			return methods;
		},
		onPostRender: function(val){
			effect.onPostRender	= val;
			return methods;
		},
		pushTo	: function(emitter){
			emitter.effects().push(effect);
			return methods;	
		},
		back	: function(value){
			if( value === undefined )	return effect.back;	
			effect.back	= value;
			return methods;	
		},
		effect	: function(){
			return effect;
		}
	}
	return methods;
}

/**
 * An effect to apply on particles
*/
Fireworks.Effect	= function(){
}

/**
 * Callback called on particle creation
*/
//Fireworks.Effect.prototype.onCreate	= function(){
//}
//
/**
 * Callback called when a particle is spawning
 *
 * TODO to rename onSpawn
*/
//Fireworks.Effect.prototype.onBirth	= function(){
//}
//
//Fireworks.Effect.prototype.onDeath	= function(){
//}
//
//Fireworks.Effect.prototype.onUpdate	= function(){
//}

