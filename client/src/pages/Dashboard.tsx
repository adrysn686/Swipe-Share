import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  const { user } = useAuth();

  // Mock data for demonstration
  const availableSwipes = [
    {
      id: 1,
      title: 'Lunch at North Campus Dining',
      diningHall: 'North Campus Dining Hall',
      time: '12:00 PM - 2:00 PM',
      price: 8,
      owner: 'Sarah Johnson',
      rating: 4.8
    },
    {
      id: 2,
      title: 'Free Dinner Swipe',
      diningHall: 'Student Union Food Court',
      time: '5:00 PM - 7:00 PM',
      price: 0,
      owner: 'Mike Chen',
      rating: 4.9
    },
    {
      id: 3,
      title: 'Breakfast Available',
      diningHall: 'East Campus Dining Hall',
      time: '8:00 AM - 10:00 AM',
      price: 5,
      owner: 'Emma Davis',
      rating: 4.7
    }
  ];

  const scheduledExchanges = [
    {
      id: 1,
      title: 'Lunch with Alex Thompson',
      diningHall: 'West Campus Dining Hall',
      time: 'Today, 1:00 PM',
      status: 'confirmed',
      meetingPoint: 'Main entrance'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">
            Welcome back, {user?.name}! 👋
          </h1>
          <p className="text-gray-600 mt-2">
            Find meal swipes or share your unused swipes with fellow students
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary-600">{user?.rating || 0}</div>
            <div className="text-gray-600">Rating</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary-600">{user?.reviewCount || 0}</div>
            <div className="text-gray-600">Reviews</div>
          </div>
          <div className="card text-center">
            <div className="text-2xl font-bold text-primary-600">{user?.successRate || 0}%</div>
            <div className="text-gray-600">Success Rate</div>
          </div>
          <div className="card text-center">
            <Link to="/create-listing" className="btn-primary w-full">
              + List a Swipe
            </Link>
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Available Swipes */}
          <div className="lg:col-span-2">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900">
                🍽️ Swipes Available Near You Today
              </h2>
              <button className="text-primary-600 hover:text-primary-700 font-medium">
                View all
              </button>
            </div>

            <div className="space-y-4">
              {availableSwipes.map((swipe) => (
                <div key={swipe.id} className="card hover:shadow-lg transition-shadow">
                  <div className="flex items-center justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {swipe.title}
                      </h3>
                      <div className="flex items-center text-gray-600 mb-2">
                        <span className="mr-4">📍 {swipe.diningHall}</span>
                        <span>⏰ {swipe.time}</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center">
                          <span className="text-sm text-gray-600 mr-2">By {swipe.owner}</span>
                          <div className="flex items-center">
                            <span className="text-yellow-400">★</span>
                            <span className="text-sm text-gray-600 ml-1">{swipe.rating}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-bold text-primary-600">
                            {swipe.price === 0 ? 'FREE' : `$${swipe.price}`}
                          </span>
                          <button className="btn-primary">
                            Request
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sidebar */}
          <div>
            {/* Scheduled Exchanges */}
            <div className="mb-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                📅 Your Scheduled Exchanges
              </h2>
              
              {scheduledExchanges.length > 0 ? (
                <div className="space-y-3">
                  {scheduledExchanges.map((exchange) => (
                    <div key={exchange.id} className="card bg-primary-50 border-primary-200">
                      <h3 className="font-semibold text-gray-900 mb-2">
                        {exchange.title}
                      </h3>
                      <div className="text-sm text-gray-600 space-y-1">
                        <div>📍 {exchange.diningHall}</div>
                        <div>⏰ {exchange.time}</div>
                        <div>🚪 {exchange.meetingPoint}</div>
                      </div>
                      <div className="mt-3">
                        <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 text-green-800">
                          Confirmed
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="card text-center text-gray-500">
                  <p>No scheduled exchanges</p>
                  <p className="text-sm mt-1">Request a swipe to get started!</p>
                </div>
              )}
            </div>

            {/* Quick Filters */}
            <div>
              <h2 className="text-xl font-bold text-gray-900 mb-4">
                🔍 Quick Filters
              </h2>
              <div className="card space-y-3">
                <button className="w-full text-left p-2 rounded hover:bg-gray-50 transition-colors">
                  🕐 Available Now
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-gray-50 transition-colors">
                  💰 Free Swipes
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-gray-50 transition-colors">
                  📍 Near You
                </button>
                <button className="w-full text-left p-2 rounded hover:bg-gray-50 transition-colors">
                  ⭐ Highly Rated
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;