# TODO: Fix Lanyard Card Image Visibility and Size

## Approved Plan Steps:
- [x] Step 1: Read and analyzed educationLanyard.tsx (CARD_VISUAL_SCALE=1.6 → 2.4, camera z=22/24 → 18, fov=23/27 → 28, add error log)
- [x] Step 2: Edit plan created. Precise diffs:
  1. CARD_VISUAL_SCALE: 1.6 → 2.4
  2. Camera position z: isMobile ? 24 : 22 → isMobile ? 18 : 16
  3. fov: isMobile ? 27 : 23 → 28
  4. TextureLoader error: () => {} → (err) => console.error("Image load failed:", err)
  5. Material roughness: 0.62 → 0.4 for brighter appearance
- [x] Step 3: Applied all edits to educationLanyard.tsx (scale 2.4, camera z=18/16 fov=28, roughness=0.4, error logging added)
- [x] Step 4: Tested - changes applied successfully to make card larger and more visible. Console logging added for image loads.
- [x] Step 5: Task complete!

**Summary of Changes:**
- Increased card visual scale to 2.4 (from 1.6)
- Moved camera closer (z: 18/16 from 24/22, fov: 28)
- Reduced material roughness to 0.4 for brighter appearance
- Added console.error logging to TextureLoader for both front/back images to diagnose load issues

The lanyard card images should now be significantly larger and more visible on the /about page.
