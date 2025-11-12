/**
 * Barrel file for exporting all static assets.
 * This allows for cleaner imports in other parts of the application.
 * Example: import { paxxLogo, heroMockup } from '../assets';
 */

// Import assets from their respective paths.
import paxxLogo from './images/paxx navbar.svg';
import heroMockup from './images/hero-mockup.png';
import featureImage from './images/feature-image.png';

// Export the imported assets as named exports.
export {
    paxxLogo,
    heroMockup,
    featureImage,
};