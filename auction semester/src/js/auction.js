// Import the auction system
import { auctionSystem } from './auction.js';

// Get DOM elements
const auctionsContainer = document.getElementById('auctions-container');
const filterForm = document.getElementById('filter-form');

// Initialize the system
AuctionSystem.renderAuctions(auctionsContainer, auctionSystem.auctions);
AuctionSystem.initializeBidControls(auctionsContainer, auctionSystem);

// Set up observer to re-render when auctions change
auctionSystem.addObserver((auctions) => {
  AuctionSystem.renderAuctions(auctionsContainer, auctions);
});

// Filter form handler
filterForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const filters = {
    category: filterForm.category.value || null,
    minPrice: parseFloat(filterForm.minPrice.value) || null,
    maxPrice: parseFloat(filterForm.maxPrice.value) || null,
    searchTerm: filterForm.search.value || null
  };
  
  const filteredAuctions = auctionSystem.filterAuctions(filters);
  AuctionSystem.renderAuctions(auctionsContainer, filteredAuctions);
});