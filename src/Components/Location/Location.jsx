import { useContext, useState, useEffect } from "react";
import { ResContextProvider } from "../../Context/ResCotextProvider";
import ResContext from "../../Context/ResContext";
import { RxCross1 } from "react-icons/rx";
import { TbCurrentLocation } from "react-icons/tb";
import { CiSearch } from "react-icons/ci";

const Location = () => {
  const { LocationModel, setLocationModel, selectedLocation, setSelectedLocation } = useContext(ResContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [currentLocation, setCurrentLocation] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);
  const [error, setError] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  // Predefined popular locations
  const popularLocations = [
    { name: "Indrapuri", area: "Chatrasal Nagar, Bhopal" },
    { name: "New Market", area: "Bhopal" },
    { name: "MP Nagar", area: "Bhopal" },
    { name: "Arera Colony", area: "Bhopal" },
    { name: "Kolar Road", area: "Bhopal" },
  ];

  // Search for locations using API
  const searchLocations = async (query) => {
    if (!query || query.length < 3) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    setIsSearching(true);
    try {
      // Using BigDataCloud's autocomplete API
      const response = await fetch(
        `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=23.2599&longitude=77.4126&localityLanguage=en`
      );
      
      // For better search, use a geocoding search API
      // Using LocationIQ's free API (you can also use other services)
      const searchResponse = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}&limit=5&countrycodes=in`,
        {
          headers: {
            'User-Agent': 'FoodieApp/1.0'
          }
        }
      );

      if (searchResponse.ok) {
        const data = await searchResponse.json();
        const formattedResults = data.map(item => ({
          name: item.name || item.display_name.split(',')[0],
          area: item.display_name.split(',').slice(1).join(',').trim() || 'India',
          lat: item.lat,
          lon: item.lon
        }));
        setSearchResults(formattedResults);
      } else {
        // Fallback to filtering popular locations
        const filtered = popularLocations.filter(
          (location) =>
            location.name.toLowerCase().includes(query.toLowerCase()) ||
            location.area.toLowerCase().includes(query.toLowerCase())
        );
        setSearchResults(filtered);
      }
    } catch (err) {
      console.error('Search error:', err);
      // Fallback to filtering popular locations
      const filtered = popularLocations.filter(
        (location) =>
          location.name.toLowerCase().includes(query.toLowerCase()) ||
          location.area.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
    }
    setIsSearching(false);
  };

  // Debounce search
  useEffect(() => {
    const timer = setTimeout(() => {
      if (searchQuery) {
        searchLocations(searchQuery);
      } else {
        setSearchResults([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [searchQuery]);

  const getCurrentLocation = () => {
    setIsLoadingLocation(true);
    setError("");

    if (!navigator.geolocation) {
      setError("Geolocation is not supported by your browser");
      setIsLoadingLocation(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        
        try {
          // Using BigDataCloud's free reverse geocoding API (no CORS issues)
          const response = await fetch(
            `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`
          );
          
          if (!response.ok) {
            throw new Error('Failed to fetch location');
          }
          
          const data = await response.json();
          
          // Extract location details
          const locationName = data.locality || data.city || data.principalSubdivision || "Current Location";
          const area = data.city || data.principalSubdivision || data.countryName || "";
          const fullAddress = `${data.locality || ''} ${data.city || ''} ${data.principalSubdivision || ''}`.trim() || 
                            `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          
          const displayLocation = area ? `${locationName}, ${area}` : locationName;
          
          setCurrentLocation(displayLocation);
          setSearchQuery(fullAddress);
          setSelectedLocation({
            name: locationName,
            area: area || 'Current Location'
          });
          setIsLoadingLocation(false);
        } catch (err) {
          console.error('Geocoding error:', err);
          // Fallback: just use coordinates
          const coordsDisplay = `${latitude.toFixed(4)}, ${longitude.toFixed(4)}`;
          setError("Using coordinates (location details unavailable)");
          setCurrentLocation(coordsDisplay);
          setSearchQuery(coordsDisplay);
          setSelectedLocation({
            name: "Current Location",
            area: coordsDisplay
          });
          setIsLoadingLocation(false);
        }
      },
      (error) => {
        setIsLoadingLocation(false);
        switch (error.code) {
          case error.PERMISSION_DENIED:
            setError("Location permission denied. Please enable location access.");
            break;
          case error.POSITION_UNAVAILABLE:
            setError("Location information unavailable.");
            break;
          case error.TIMEOUT:
            setError("Location request timed out.");
            break;
          default:
            setError("An error occurred while getting location.");
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 10000,
        maximumAge: 0
      }
    );
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setSearchQuery("");
    setSearchResults([]);
    setTimeout(() => {
      setLocationModel(false);
    }, 300);
  };

  const filteredLocations = searchQuery && searchResults.length > 0 
    ? searchResults 
    : popularLocations.filter(
        (location) =>
          !searchQuery ||
          location.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          location.area.toLowerCase().includes(searchQuery.toLowerCase())
      );

  if (!LocationModel) {
    return null;
  }

  return (
    <>
      {/* Backdrop overlay */}
      <div
        className="fixed inset-0 bg-black/50 z-40 backdrop-blur-sm"
        onClick={() => setLocationModel(false)}
      />

      {/* Location sidebar */}
      <div className="h-full w-full sm:w-10/12 md:w-7/12 lg:w-5/12 xl:w-4/12 bg-white fixed z-50 top-0 left-0 shadow-2xl overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 flex items-center justify-between px-6 py-4 shadow-sm z-10">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-800">
            Select Location
          </h2>
          <button
            onClick={() => setLocationModel(false)}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            aria-label="Close location modal"
          >
            <RxCross1 className="text-xl sm:text-2xl text-gray-600" />
          </button>
        </div>

        {/* Search Input */}
        <div className="px-6 py-6">
          <div className="relative">
            <CiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl text-gray-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-4 text-base sm:text-lg border-2 border-gray-300 rounded-lg focus:border-orange-500 focus:outline-none transition-colors placeholder:text-gray-400"
              placeholder="Search for area, street name..."
            />
          </div>
        </div>

        {/* Get Current Location Button */}
        <div className="px-6 pb-4">
          <button
            onClick={getCurrentLocation}
            disabled={isLoadingLocation}
            className="w-full p-4 bg-white hover:bg-orange-50 border-2 border-orange-500 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="flex items-center gap-4">
              <TbCurrentLocation className="text-3xl text-orange-500 flex-shrink-0" />
              <div className="text-left flex-1">
                <p className="text-base sm:text-lg font-semibold text-gray-800">
                  {isLoadingLocation ? "Getting location..." : "Get Current Location"}
                </p>
                <p className="text-sm text-gray-500">Using GPS</p>
              </div>
            </div>
          </button>

          {/* Display current location if available */}
          {currentLocation && (
            <div className="mt-3 p-3 bg-green-50 border border-green-200 rounded-lg">
              <p className="text-sm text-green-800">
                <span className="font-semibold">Current Location:</span> {currentLocation}
              </p>
            </div>
          )}

          {/* Error message */}
          {error && (
            <div className="mt-3 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="text-sm text-red-600">{error}</p>
            </div>
          )}
        </div>

        {/* Divider */}
        <div className="px-6">
          <div className="border-t border-gray-200"></div>
        </div>

        {/* Popular Locations */}
        <div className="px-6 py-4">
          <h3 className="text-lg font-semibold text-gray-700 mb-4">
            {searchQuery ? (isSearching ? "Searching..." : "Search Results") : "Popular Locations"}
          </h3>
          
          <div className="space-y-2">
            {filteredLocations.length > 0 ? (
              filteredLocations.map((location, index) => (
                <button
                  key={index}
                  onClick={() => handleLocationSelect(location)}
                  className="w-full p-4 text-left hover:bg-gray-50 border border-gray-200 rounded-lg transition-colors group"
                >
                  <p className="font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                    {location.name}
                  </p>
                  <p className="text-sm text-gray-500 mt-1">{location.area}</p>
                </button>
              ))
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">
                  {searchQuery && !isSearching ? "No locations found" : "Start typing to search"}
                </p>
                <p className="text-sm text-gray-400 mt-2">
                  {searchQuery && !isSearching ? "Try searching with different keywords" : "Enter at least 3 characters"}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
