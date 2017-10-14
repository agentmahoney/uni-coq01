/**
 * 
 * Polygon to test scan-line algorithm.
 * 
 * @namespace cog1.data
 * @module myModel
 */
define(["exports", "data"], function(exports, data) {
	"use strict";

	/**
	 * @parameter object with fields:
	 * @parameter scale is the edge length of the cube.
	 * @returns instance of this model.
	 */
	exports.create = function(parameter) {
		if(parameter) {
			var scale = parameter.scale;
		}
		// Set default values if parameter is undefined.
		if(scale == undefined){
			scale = 200;
		}
		
		// Instance of the model to be returned.
		var instance = {};
			
		instance.vertices = [
			
			
			// bottom (y=-1)
			[-1,-1, 1],
			[ 1,-1, 1],
			[ 1,-1,-1],
			[-1,-1,-1],
			// top (y=+1)		
			[-1,1, 1],
			[ 1,1, 1],
			[ 1,1,-1],
			[-1,1,-1],		
			// roof
			[ 0, 3, 0],
			//side building
			[ 4,-1,-1],
			[ 4, 1,-1],
			[ 4, 1, 1],
			[ 4,-1, 1]
			
	
		];
		
		
		
		instance.polygonVertices = [
			
			
			[3,2,1,0],
			[4,5,6,7],
			[4,0,1,5],
			[1,2,6,5],
			[6,2,3,7],
			[3,0,4,7],
			
			[4,5,8],
			[6,7,8],
			[0,1,4],
			[0,1,5],
			
			[2,3,6],
			[2,3,7],
			[3,0,4],
			[3,0,7],
			
			[2,9,10,6],
			[1,12,11,5],
			[9,10,11,12],
			
			[1,5,12],
			[1,5,11],
			[2,6,9],
			[2,6,10],
			[9,10,11],
			[9,10,12]
			
			
		];	
		
		instance.polygonColors = [0,7,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
				
		data.applyScale.call(instance, scale);
		
		return instance;		
	};
});