'use client'

import { Navbar } from '../../../devlink/Navbar'
import { Footer2 } from '../../../devlink/Footer2'
import { useState } from 'react'

// Enhanced mock data with real automotive details
const mockVehicles = [
  {
    id: 1,
    make: 'Audi',
    model: 'A5',
    year: 2023,
    price: 125000,
    mileage: 12000,
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?w=400&h=300&fit=crop',
    features: ['AWD', 'Certified', 'Premium']
  },
  {
    id: 2,
    make: 'Porsche',
    model: '718 Boxster',
    year: 2023,
    price: 125000,
    mileage: 8500,
    type: 'Roadster',
    image: 'https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?w=400&h=300&fit=crop',
    features: ['Convertible', 'Sports Car', 'Manual']
  },
  {
    id: 3,
    make: 'Audi',
    model: 'A5',
    year: 2023,
    price: 85000,
    mileage: 15000,
    type: 'Luxury',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    features: ['AWD', 'Technology', 'Premium']
  },
  {
    id: 4,
    make: 'Porsche',
    model: '911 Carrera Cabriolet',
    year: 2022,
    price: 125000,
    mileage: 18000,
    type: 'Convertible',
    image: 'https://images.unsplash.com/photo-1544829099-b9a0c5303bea?w=400&h=300&fit=crop',
    features: ['Convertible', 'Sports', 'Manual']
  },
  {
    id: 5,
    make: 'Mercedes',
    model: 'C43 Sedan',
    year: 2023,
    price: 95000,
    mileage: 22000,
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&h=300&fit=crop',
    features: ['AMG', 'Performance', 'AWD']
  },
  {
    id: 6,
    make: 'Mercedes',
    model: 'C43 Sedan',
    year: 2023,
    price: 125000,
    mileage: 12000,
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop',
    features: ['AMG', 'Luxury', 'Technology']
  },
  {
    id: 7,
    make: 'BMW',
    model: 'Z4 sDrive30i Roadster',
    year: 2022,
    price: 89500,
    mileage: 25000,
    type: 'Roadster',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    features: ['Convertible', 'Roadster', 'Premium']
  },
  {
    id: 8,
    make: 'Audi',
    model: 'R8',
    year: 2023,
    price: 210000,
    mileage: 5000,
    type: 'Sports Car',
    image: 'https://images.unsplash.com/photo-1544636331-e26879cd4d9b?w=400&h=300&fit=crop',
    features: ['V10', 'AWD', 'Carbon Fiber']
  },
  {
    id: 9,
    make: 'BMW',
    model: '3 Series Sedan',
    year: 2023,
    price: 75000,
    mileage: 18000,
    type: 'Sedan',
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop',
    features: ['Luxury', 'Technology', 'Sport']
  },
  {
    id: 10,
    make: 'Mercedes',
    model: 'CLE Cabriolet',
    year: 2024,
    price: 100000,
    mileage: 3000,
    type: 'Convertible',
    image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&h=300&fit=crop',
    features: ['Convertible', 'New Model', 'AMG Line']
  }
];

const makes = ['Audi', 'BMW', 'Mercedes', 'Porsche'];
const types = ['Sedan', 'SUV', 'Coupe', 'Luxury', 'Convertible', 'Sports Car'];

export default function FilterPage() {
  const [selectedMakes, setSelectedMakes] = useState<string[]>([]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState({ min: '', max: '' });
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredVehicles, setFilteredVehicles] = useState(mockVehicles);

  const handleMakeFilter = (make: string) => {
    const newMakes = selectedMakes.includes(make) 
      ? selectedMakes.filter(m => m !== make)
      : [...selectedMakes, make];
    setSelectedMakes(newMakes);
    filterVehicles(newMakes, selectedTypes, priceRange, searchTerm);
  };

  const handleTypeFilter = (type: string) => {
    const newTypes = selectedTypes.includes(type)
      ? selectedTypes.filter(t => t !== type)
      : [...selectedTypes, type];
    setSelectedTypes(newTypes);
    filterVehicles(selectedMakes, newTypes, priceRange, searchTerm);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    filterVehicles(selectedMakes, selectedTypes, priceRange, term);
  };

  const filterVehicles = (makes: string[], types: string[], price: any, search: string) => {
    let filtered = mockVehicles;

    // Filter by makes
    if (makes.length > 0) {
      filtered = filtered.filter(vehicle => makes.includes(vehicle.make));
    }

    // Filter by types
    if (types.length > 0) {
      filtered = filtered.filter(vehicle => types.includes(vehicle.type));
    }

    // Filter by search term
    if (search) {
      filtered = filtered.filter(vehicle => 
        vehicle.make.toLowerCase().includes(search.toLowerCase()) ||
        vehicle.model.toLowerCase().includes(search.toLowerCase())
      );
    }

    setFilteredVehicles(filtered);
  };

  const clearAllFilters = () => {
    setSelectedMakes([]);
    setSelectedTypes([]);
    setPriceRange({ min: '', max: '' });
    setSearchTerm('');
    setFilteredVehicles(mockVehicles);
  };

  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f8fafc' }}>
      {/* Navigation */}
      <Navbar />
      
      {/* Hero Section */}
      <section 
        style={{
          position: 'relative',
          height: '250px',
          backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1200&h=400&fit=crop')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '16px', margin: '0' }}>
            FIND YOUR LOCAL DEALER
          </h1>
          <button 
            style={{
              backgroundColor: '#2563eb',
              color: 'white',
              padding: '12px 24px',
              borderRadius: '6px',
              border: 'none',
              fontSize: '14px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            ALL LOCATIONS
          </button>
        </div>
      </section>

      {/* Filter Results Header */}
      <section style={{ backgroundColor: 'white', borderBottom: '1px solid #e5e7eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '16px 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>Results:</span>
            <span style={{ 
              backgroundColor: '#f3f4f6', 
              color: '#374151', 
              padding: '4px 12px', 
              borderRadius: '4px', 
              fontSize: '14px' 
            }}>
              {filteredVehicles.length}
            </span>
            <span style={{ fontSize: '14px', color: '#6b7280' }}>
              Showing items 1 to {Math.min(10, filteredVehicles.length)} of {filteredVehicles.length}
            </span>
            <div style={{ marginLeft: 'auto' }}>
              <input
                type="text"
                placeholder="Search cars..."
                value={searchTerm}
                onChange={(e) => handleSearch(e.target.value)}
                style={{
                  border: '1px solid #d1d5db',
                  borderRadius: '6px',
                  padding: '8px 16px',
                  width: '250px',
                  fontSize: '14px'
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '32px' }}>
          
          {/* Filter Sidebar */}
          <aside>
            <div style={{ 
              backgroundColor: 'white', 
              borderRadius: '8px', 
              padding: '24px', 
              boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
              position: 'sticky',
              top: '24px'
            }}>
              
              {/* Clear All Button */}
              <button 
                onClick={clearAllFilters}
                style={{
                  width: '100%',
                  backgroundColor: '#f3f4f6',
                  color: '#374151',
                  padding: '8px 16px',
                  borderRadius: '6px',
                  border: '1px solid #d1d5db',
                  fontSize: '14px',
                  fontWeight: '500',
                  cursor: 'pointer',
                  marginBottom: '24px'
                }}
              >
                Clear All Filters
              </button>

              {/* Types Filter */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold', 
                  marginBottom: '16px', 
                  color: '#2563eb',
                  margin: '0 0 16px 0'
                }}>
                  Types
                </h3>
                {types.map((type) => (
                  <label 
                    key={type} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px', 
                      cursor: 'pointer',
                      padding: '4px',
                      borderRadius: '4px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <input 
                      type="checkbox" 
                      checked={selectedTypes.includes(type)}
                      onChange={() => handleTypeFilter(type)}
                      style={{ marginRight: '12px', accentColor: '#2563eb' }}
                    />
                    <span style={{ color: '#374151' }}>{type}</span>
                  </label>
                ))}
              </div>
              
              {/* Makes Filter */}
              <div style={{ marginBottom: '32px' }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold', 
                  marginBottom: '16px', 
                  color: '#2563eb',
                  margin: '0 0 16px 0'
                }}>
                  Makes
                </h3>
                {makes.map((make) => (
                  <label 
                    key={make} 
                    style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      marginBottom: '12px', 
                      cursor: 'pointer',
                      padding: '4px',
                      borderRadius: '4px'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'}
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                  >
                    <input 
                      type="checkbox" 
                      checked={selectedMakes.includes(make)}
                      onChange={() => handleMakeFilter(make)}
                      style={{ marginRight: '12px', accentColor: '#2563eb' }}
                    />
                    <span style={{ color: '#374151' }}>{make}</span>
                  </label>
                ))}
              </div>
              
              {/* Price Filter */}
              <div style={{ marginBottom: '24px' }}>
                <h3 style={{ 
                  fontSize: '18px', 
                  fontWeight: 'bold', 
                  marginBottom: '16px', 
                  color: '#2563eb',
                  margin: '0 0 16px 0'
                }}>
                  Price
                </h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <select 
                    value={priceRange.min}
                    onChange={(e) => setPriceRange({...priceRange, min: e.target.value})}
                    style={{
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      padding: '8px 12px',
                      fontSize: '14px'
                    }}
                  >
                    <option value="">Min Price</option>
                    <option value="50000">$50,000</option>
                    <option value="75000">$75,000</option>
                    <option value="100000">$100,000</option>
                  </select>
                  <select 
                    value={priceRange.max}
                    onChange={(e) => setPriceRange({...priceRange, max: e.target.value})}
                    style={{
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      padding: '8px 12px',
                      fontSize: '14px'
                    }}
                  >
                    <option value="">Max Price</option>
                    <option value="150000">$150,000</option>
                    <option value="200000">$200,000</option>
                    <option value="300000">$300,000</option>
                  </select>
                </div>
              </div>
              
            </div>
          </aside>

          {/* Results Grid */}
          <main>
            <div className="vehicle-grid">
              {filteredVehicles.map((vehicle) => (
                <div 
                  key={vehicle.id} 
                  style={{ 
                    backgroundColor: 'white', 
                    borderRadius: '8px', 
                    boxShadow: '0 1px 3px 0 rgba(0, 0, 0, 0.1)', 
                    overflow: 'hidden',
                    transition: 'all 0.2s ease'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 1px 3px 0 rgba(0, 0, 0, 0.1)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  
                  {/* Vehicle Image */}
                  <div style={{ height: '200px', position: 'relative', overflow: 'hidden' }}>
                    <img 
                      src={vehicle.image} 
                      alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                      style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                      onError={(e) => {
                        e.currentTarget.src = 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=400&h=300&fit=crop';
                      }}
                    />
                    {/* Feature Badges */}
                    <div style={{ 
                      position: 'absolute', 
                      top: '12px', 
                      left: '12px', 
                      display: 'flex', 
                      gap: '4px',
                      flexWrap: 'wrap'
                    }}>
                      {vehicle.features.slice(0, 2).map((feature) => (
                        <span 
                          key={feature} 
                          style={{
                            backgroundColor: '#2563eb',
                            color: 'white',
                            fontSize: '12px',
                            padding: '4px 8px',
                            borderRadius: '4px',
                            fontWeight: '500'
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Vehicle Details */}
                  <div style={{ padding: '20px' }}>
                    {/* Make/Model Header */}
                    <div style={{ marginBottom: '12px' }}>
                      <div style={{ fontSize: '14px', color: '#6b7280', marginBottom: '4px' }}>
                        {vehicle.make}
                      </div>
                      <h3 style={{ 
                        fontSize: '20px', 
                        fontWeight: 'bold', 
                        color: '#111827',
                        margin: '0'
                      }}>
                        {vehicle.model}
                      </h3>
                    </div>
                    
                    {/* Vehicle Info Grid */}
                    <div style={{ 
                      display: 'grid', 
                      gridTemplateColumns: '1fr 1fr', 
                      gap: '8px', 
                      fontSize: '14px', 
                      color: '#6b7280',
                      marginBottom: '16px'
                    }}>
                      <div>
                        <span style={{ color: '#9ca3af' }}>Type:</span>
                        <div style={{ fontWeight: '500', color: '#374151' }}>{vehicle.type}</div>
                      </div>
                      <div>
                        <span style={{ color: '#9ca3af' }}>Year:</span>
                        <div style={{ fontWeight: '500', color: '#374151' }}>{vehicle.year}</div>
                      </div>
                    </div>
                    
                    {/* Price */}
                    <div style={{ 
                      fontSize: '24px', 
                      fontWeight: 'bold', 
                      color: '#2563eb', 
                      marginBottom: '16px' 
                    }}>
                      ${vehicle.price.toLocaleString()}
                    </div>
                    
                    {/* Action Buttons */}
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <button style={{
                        flex: 1,
                        backgroundColor: '#2563eb',
                        color: 'white',
                        padding: '10px 12px',
                        borderRadius: '6px',
                        border: 'none',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer',
                        transition: 'background-color 0.2s'
                      }}>
                        View Details
                      </button>
                      <button style={{
                        flex: 1,
                        backgroundColor: '#f3f4f6',
                        color: '#374151',
                        padding: '10px 12px',
                        borderRadius: '6px',
                        border: '1px solid #d1d5db',
                        fontSize: '14px',
                        fontWeight: '500',
                        cursor: 'pointer'
                      }}>
                        Contact
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* No Results State */}
            {filteredVehicles.length === 0 && (
              <div style={{ 
                textAlign: 'center', 
                padding: '48px', 
                color: '#6b7280' 
              }}>
                <h3 style={{ fontSize: '18px', marginBottom: '8px' }}>No vehicles found</h3>
                <p>Try adjusting your filters or search terms</p>
              </div>
            )}
          </main>
        </div>
      </section>

      {/* Footer */}
      <Footer2 />
    </div>
  )
}
