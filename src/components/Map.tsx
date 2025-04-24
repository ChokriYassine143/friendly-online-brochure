
import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { useToast } from './ui/use-toast';

const LOCAL_STORAGE_TOKEN_KEY = 'mapbox_token';

const Map = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [token, setToken] = useState<string>(() => localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY) || '');
  const [isTokenSubmitted, setIsTokenSubmitted] = useState<boolean>(!!localStorage.getItem(LOCAL_STORAGE_TOKEN_KEY));
  const { toast } = useToast();

  const handleTokenSubmit = () => {
    if (!token.trim()) {
      toast({
        title: "Error",
        description: "Please enter a valid Mapbox token",
        variant: "destructive"
      });
      return;
    }

    localStorage.setItem(LOCAL_STORAGE_TOKEN_KEY, token.trim());
    setIsTokenSubmitted(true);
    toast({
      title: "Success",
      description: "Mapbox token saved successfully"
    });
  };

  const handleClearToken = () => {
    localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    setToken('');
    setIsTokenSubmitted(false);
    
    // Remove the map if it exists
    if (map.current) {
      map.current.remove();
      map.current = null;
    }
    
    toast({
      title: "Token removed",
      description: "Mapbox token has been removed"
    });
  };

  useEffect(() => {
    if (!mapContainer.current || !isTokenSubmitted || !token) return;

    // Set the access token
    mapboxgl.accessToken = token;
    
    try {
      map.current = new mapboxgl.Map({
        container: mapContainer.current,
        style: 'mapbox://styles/mapbox/light-v11',
        center: [-74.006, 40.7128], // New York coordinates
        zoom: 13
      });

      // Add navigation controls
      map.current.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );

      // Add marker
      new mapboxgl.Marker()
        .setLngLat([-74.006, 40.7128])
        .addTo(map.current);
    } catch (error) {
      console.error("Error initializing map:", error);
      toast({
        title: "Error",
        description: "Failed to initialize map. Please check your token.",
        variant: "destructive"
      });
      setIsTokenSubmitted(false);
      localStorage.removeItem(LOCAL_STORAGE_TOKEN_KEY);
    }

    return () => {
      map.current?.remove();
    };
  }, [isTokenSubmitted, token]);

  return (
    <div className="relative w-full h-[400px] flex flex-col">
      {!isTokenSubmitted ? (
        <div className="absolute inset-0 bg-gray-100 rounded-lg shadow-lg flex flex-col items-center justify-center p-6">
          <h3 className="text-lg font-semibold mb-4">Mapbox Access Token Required</h3>
          <p className="text-sm text-gray-600 mb-4 text-center">
            To view the map, please enter your Mapbox public token. 
            You can find this at <a href="https://mapbox.com/" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">mapbox.com</a> in the tokens section after creating an account.
          </p>
          <div className="w-full max-w-md space-y-4">
            <Input 
              type="text"
              placeholder="Enter your Mapbox public token"
              value={token}
              onChange={(e) => setToken(e.target.value)}
              className="w-full"
            />
            <Button 
              onClick={handleTokenSubmit}
              className="w-full"
            >
              Submit Token
            </Button>
          </div>
        </div>
      ) : (
        <>
          <div ref={mapContainer} className="absolute inset-0 rounded-lg shadow-lg" />
          <div className="absolute bottom-2 left-2">
            <Button 
              variant="outline" 
              size="sm" 
              onClick={handleClearToken}
              className="bg-white/80 hover:bg-white text-xs"
            >
              Change Token
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Map;
