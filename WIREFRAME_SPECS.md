# Wikowí Wireframe Specifications

Complete specifications for 8 grayscale wireframes. All screens use:
- **Background**: Dark gray (#1A1A1A or 20% black)
- **Text**: White
- **Shapes**: Simple rectangles, circles, lines
- **Typography**: Serif for body text, sans-serif for UI labels
- **No colors, images, or interactions** - grayscale only
- **Auto Layout**: Use for all rows and lists
- Each screen clearly labeled

---

## Screen 1: Home / Browse (PRIORITY 1)

**Frame Size**: 375 × 812 (mobile) or 1440 × 900 (desktop)

### Layout Structure

**Top Navigation Bar** (Fixed, 60px height)
- Background: #1A1A1A
- Left: "Wikowí" logo text (sans-serif, 20px, white)
- Right: Profile icon (circle, 32px diameter, white stroke 2px)
- Padding: 16px horizontal

**Hero Section** (240px height)
- Background: Slightly lighter gray (#2A2A2A)
- Content (bottom-left aligned, 24px from edges):
  - Heading: "Welcome Back" (serif, 32px, white, bold)
  - Subtext: "Continue where you left off" (sans-serif, 14px, white 60% opacity)

**Continue Reading Card** (Full width, 160px height, 16px margin horizontal)
- Background: #2A2A2A
- Border: 1px white 20% opacity
- Rounded corners: 8px
- Layout (horizontal, 16px padding):
  - Left: Book cover placeholder (gray rectangle 90 × 120px, #3A3A3A)
  - Right (flex, 16px left margin):
    - Title: "El Principito" (serif, 18px, white, bold)
    - Author: "Antoine de Saint-Exupéry" (sans-serif, 14px, white 60%)
    - Progress bar: (full width, 4px height, 8px top margin)
      - Background: #3A3A3A
      - Fill: White 40% opacity, 60% width
    - Button: "Continue" (sans-serif, 14px, white, 1px border, 8px padding, 4px radius)

**Browse by Level Section** (80px height, 16px top margin)
- Label: "Browse by Level" (sans-serif, 12px, white 60%, 16px left margin, 8px bottom)
- Horizontal scrollable chips (16px left margin, 8px gap):
  - Each chip: Rectangle with rounded corners (24px radius)
  - Padding: 12px horizontal, 8px vertical
  - Border: 1px white 30% opacity
  - Text: sans-serif, 14px, white
  - Chips: "Super Beginner", "Beginner", "Advanced Beginner", "Intermediate", "Advanced"

**Book Grid Section** (Fills remaining space, 24px top margin)
- Label: "All Stories" (serif, 24px, white, bold, 16px horizontal margin, 16px bottom)
- Grid (2 columns mobile / 5 columns desktop, 16px gap, 16px horizontal margin):
  - Each book card:
    - Book cover: Rectangle aspect ratio 2:3 (gray #3A3A3A)
    - Title: "Book Title" (sans-serif, 14px, white, 8px top margin, line-clamp 2)
    - Author: "Author Name" (sans-serif, 12px, white 60%, 4px top margin)
    - Level badge (top-right corner of cover, 8px inset):
      - Small rectangle (4px radius, white 20% background, 6px padding)
      - Text: "Beginner" (sans-serif, 10px, white)

**Label**: "Screen 1 — Home / Browse" (bottom-right corner, sans-serif, 10px, white 40%)

---

## Screen 2: Story Detail / Book Page (PRIORITY 1)

**Frame Size**: 375 × 812 (mobile)

### Layout Structure

**Header** (60px height, #1A1A1A)
- Left: Back arrow icon (24px, white, 16px left margin)
- Center: Empty
- Right: Bookmark icon (24px outline, white, 16px right margin)

**Book Cover** (Centered, 200 × 300px, 32px top margin)
- Rectangle: #3A3A3A
- Centered horizontally

**Book Info** (24px below cover, centered, 16px horizontal padding)
- Title: "El Principito" (serif, 28px, white, bold, center-aligned)
- Author: "Antoine de Saint-Exupéry" (sans-serif, 16px, white 60%, center, 8px top)
- Level badge (center, 12px top margin):
  - Rectangle (20px radius, white 20% background, 8px vertical, 16px horizontal padding)
  - Text: "Beginner" (sans-serif, 12px, white)

**Description Block** (24px below badge, 16px horizontal padding)
- Label: "Description" (sans-serif, 14px, white 60%, 8px bottom margin)
- Text block: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Una historia clásica sobre la amistad, el amor y la filosofía de vida." (serif, 16px, white, line-height 1.6, 4-5 lines)

**Stats Row** (24px below description, horizontal, center-aligned, 16px gap)
- Each stat (vertical stack, centered):
  - Icon placeholder: Circle 40px diameter, white 20% stroke 2px
  - Value: "1,234" (sans-serif, 18px, white, bold, 4px top)
  - Label: "words" (sans-serif, 12px, white 60%, 4px top)
- Stats: "words", "~15 min", "difficulty 3/5"

**Primary Button** (24px below stats, 16px horizontal margin)
- Background: White
- Text: "Start Reading" (sans-serif, 16px, black, bold)
- Padding: 16px vertical
- Border radius: 8px
- Full width

**Secondary Button** (12px below primary, 16px horizontal margin)
- Background: Transparent
- Border: 1px white 40% opacity
- Text: "Add to Bookshelf" (sans-serif, 16px, white)
- Padding: 16px vertical
- Border radius: 8px
- Full width

**Label**: "Screen 2 — Story Detail" (bottom-right, sans-serif, 10px, white 40%, 16px margins)

---

## Screen 3: Reader Screen (PRIORITY 1)

**Frame Size**: 375 × 812 (mobile)

### Layout Structure

**Progress Bar** (Top, 4px height, no margin)
- Background: #2A2A2A
- Fill: White 40% opacity, 35% width from left

**Header Bar** (60px height, #1A1A1A, 4px below progress)
- Left: Back arrow icon (24px, white, 16px left)
- Center: Chapter indicator "1 / 12" (sans-serif, 14px, white 60%)
- Right: Bookmark icon (24px outline, white, 16px right)

**Story Title** (Centered, 24px below header, 24px horizontal padding)
- Text: "El Principito" (serif, 20px, white, center-aligned)
- Divider line: 1px white 20% opacity, 40px width, centered, 16px below title

**Body Content** (Scrollable, 24px below divider, 24px horizontal padding)
- Paragraph 1 (serif, 18px, white, line-height 1.8):
  "Cuando yo tenía seis años vi en un libro sobre la selva virgen que se titulaba 'Historias vividas', una magnífica lámina."

- Paragraph 2 (16px top margin):
  "Representaba una serpiente boa que se tragaba a una fiera. En el libro se afirmaba: 'La serpiente boa se traga su presa entera, sin masticarla. Luego ya no puede moverse y duerme durante los seis meses que dura su digestión.'"

- **Highlighted word example** (within paragraph):
  Word "serpiente" shown with:
  - Background: White 15% opacity
  - Padding: 4px horizontal, 2px vertical
  - Border radius: 4px
  - Underline: 2px dotted white 40%

- Paragraph 3 (16px top margin):
  "Reflexioné mucho en ese momento sobre las aventuras de la jungla y a mi vez logré trazar con un lápiz de colores mi primer dibujo."

**Bottom Sheet for Word Definition** (Slides up from bottom, overlays content)
- Background: #2A2A2A
- Border radius: 16px top corners only
- Height: 340px

**Bottom Sheet Content**:
- Drag handle (centered, 8px from top):
  - Rectangle: 40px width, 4px height, white 30% opacity, 2px radius

- Word title (24px below handle, 24px horizontal padding):
  - "serpiente" (serif, 24px, white, bold)
  - Pronunciation: "/ser·pjen·te/" (sans-serif, 14px, white 60%, 4px top)

- Translation (16px below pronunciation, 24px horizontal padding):
  - Label: "Translation" (sans-serif, 12px, white 40%, 4px bottom)
  - Text: "snake" (sans-serif, 18px, white)

- Example sentence (16px below translation, 24px horizontal padding):
  - Label: "Example" (sans-serif, 12px, white 40%, 4px bottom)
  - Text: "La serpiente boa se traga su presa entera." (serif, 16px, white 80%, italic)

- Context note (16px below example, 24px horizontal padding):
  - Background: White 10% opacity
  - Border: 1px white 20% opacity
  - Border radius: 8px
  - Padding: 12px
  - Icon: Info circle (16px, white 60%, inline-start)
  - Text: "In this story, the boa constrictor is a central metaphor for how adults fail to see beyond the surface." (sans-serif, 14px, white 80%, 4px left of icon)

**Label**: "Screen 3 — Reader" (bottom-right of main content area, sans-serif, 10px, white 40%)

---

## Screen 4: Archive Home (PRIORITY 2)

**Frame Size**: 375 × 812 (mobile)

### Layout Structure

**Top Navigation Bar** (60px height, #1A1A1A)
- Left: "Wikowí" logo (sans-serif, 20px, white)
- Right: Profile icon (circle 32px, white stroke 2px)

**Hero Section** (180px height, #2A2A2A)
- Content (centered vertically and horizontally):
  - Icon: Archive box (48px, white 60%)
  - Heading: "Archive" (serif, 32px, white, bold, 16px top margin)
  - Subtext: "Browse trusted sources" (sans-serif, 14px, white 60%, 8px top)

**Filter Tabs** (60px height, 16px below hero)
- Horizontal tabs (centered, 8px gap):
  - "All" (active): White background, black text, 12px padding horizontal, 8px vertical, 20px radius
  - "News": Transparent, white text 60%, white 30% border, same padding/radius
  - "Literature": Same as News
  - "Podcasts": Same as News

**Source Grid** (24px below tabs, 16px horizontal padding)
- Grid: 2 columns, 16px gap
- Each source card (aspect ratio 1:1):
  - Background: #2A2A2A
  - Border: 1px white 20% opacity
  - Border radius: 12px
  - Padding: 16px
  - Content (vertical stack):
    - Logo placeholder: Circle 64px diameter, #3A3A3A fill, centered
    - Name: "El País" (sans-serif, 16px, white, bold, center, 12px top)
    - Type: "News" (sans-serif, 12px, white 60%, center, 4px top)
    - Story count: "24 stories" (sans-serif, 12px, white 40%, center, 8px top)

**Sources displayed**:
- Row 1: "El País" (News), "BBC Mundo" (News)
- Row 2: "Cervantes Virtual" (Literature), "Real Academia" (Literature)
- Row 3: "Radio Ambulante" (Podcasts), "Duolingo Podcast" (Podcasts)

**Label**: "Screen 4 — Archive Home" (bottom-right, sans-serif, 10px, white 40%)

---

## Screen 5: Archive Source Page (PRIORITY 2)

**Frame Size**: 375 × 812 (mobile)

### Layout Structure

**Header** (60px height, #1A1A1A)
- Left: Back arrow (24px, white)
- Center: Empty
- Right: Search icon (24px, white 60%)

**Source Header** (160px height, #2A2A2A)
- Logo: Circle 80px diameter, #3A3A3A, centered horizontal, 24px from top
- Name: "El País" (serif, 24px, white, bold, center, 16px below logo)
- Type: "News · 24 stories" (sans-serif, 14px, white 60%, center, 4px top)

**Sort/Filter Bar** (50px height, 16px below header)
- Background: Transparent
- Horizontal row (space-between, 16px horizontal padding):
  - Left: "Latest" dropdown (sans-serif, 14px, white, down-chevron icon)
  - Right: Filter icon (24px, white 60%)

**Story List** (Scrollable, fills remaining space, 16px horizontal padding)
- Each story card (16px gap between cards):
  - Background: #2A2A2A
  - Border: 1px white 20% opacity
  - Border radius: 8px
  - Padding: 16px
  - Layout (horizontal):
    - Left (flex, 70%):
      - Category badge: "Política" (sans-serif, 10px, white 60%, white 20% bg, 4px padding, 12px radius)
      - Title: "España aprueba nueva ley educativa" (serif, 16px, white, bold, 8px top, line-clamp 2)
      - Description: "El congreso ha aprobado hoy..." (sans-serif, 14px, white 60%, 8px top, line-clamp 2)
      - Meta row: "3 días · 450 palabras" (sans-serif, 12px, white 40%, 8px top)
    - Right (30%, 16px left margin):
      - Thumbnail: Rectangle 80 × 80px, #3A3A3A, 8px radius

**Stories displayed** (minimum 4 visible):
- Story 1: Política topic
- Story 2: Economía topic  
- Story 3: Cultura topic
- Story 4: Internacional topic

**Label**: "Screen 5 — Archive Source" (bottom-right in list area, sans-serif, 10px, white 40%)

---

## Screen 6: Profile / Bookshelf (PRIORITY 3)

**Frame Size**: 375 × 812 (mobile)

### Layout Structure

**Top Navigation** (60px height, #1A1A1A)
- Left: "Bookshelf" (serif, 20px, white, bold)
- Right: Settings gear icon (24px, white 60%)

**Stats Header** (140px height, #2A2A2A, 16px below nav)
- Profile section (centered, 24px from top):
  - Avatar: Circle 60px, white 20% stroke 2px, #3A3A3A fill
  - Name: "María García" (sans-serif, 18px, white, bold, center, 12px below avatar)
  
- Stats row (horizontal, centered, 20px below name, 32px gap):
  - Books stat (centered vertical stack):
    - "12" (sans-serif, 24px, white, bold)
    - "books" (sans-serif, 12px, white 60%, 4px top)
  - Words stat:
    - "8,432" (sans-serif, 24px, white, bold)
    - "words" (sans-serif, 12px, white 60%, 4px top)
  - Streak stat:
    - "7" (sans-serif, 24px, white, bold)
    - "day streak" (sans-serif, 12px, white 60%, 4px top)

**Reading Status Tabs** (60px height, 16px below header)
- Horizontal tabs (even distribution):
  - "Reading" (active): White bottom border 2px, white text
  - "Completed": No border, white 60% text
  - "Saved": No border, white 60% text

**Book Grid** (Scrollable, fills remaining space, 16px top margin, 16px horizontal padding)
- Grid: 2 columns, 16px gap
- Each book card:
  - Cover: Rectangle aspect 2:3, #3A3A3A, 8px radius
  - Progress bar (8px below cover):
    - Background: #2A2A2A, 4px height, full width, 2px radius
    - Fill: White 40%, 45% width from left
  - Title: "Book Title" (sans-serif, 14px, white, 8px top, line-clamp 2)
  - Progress text: "45% complete" (sans-serif, 12px, white 60%, 4px top)

**Books displayed** (minimum 6):
- 3 in Reading state (various progress percentages)
- Show enough to demonstrate scrolling

**Label**: "Screen 6 — Profile / Bookshelf" (bottom-right, sans-serif, 10px, white 40%)

---

## Screen 7: Onboarding / First Word Tap Tooltip (PRIORITY 3)

**Frame Size**: 375 × 812 (mobile)

### Layout Structure

**Full Reader Screen** (as background, dimmed 40% opacity overlay):
- Same layout as Screen 3 (Reader)
- Progress bar at top
- Header with back button
- Story title
- Body paragraphs with one word ("serpiente") highlighted

**Tooltip Overlay** (Centered on screen, above dimmed content):
- Container (300px width, auto height, centered):
  - Background: White
  - Border radius: 16px
  - Padding: 24px
  - Shadow: 0 20px 60px rgba(0, 0, 0, 0.8)

**Tooltip Content**:
- Icon: Hand pointing at word (48px, black, centered)
- Heading: "Tap any word" (serif, 24px, black, bold, center, 16px below icon)
- Body: "Tap on any word you don't know to see its translation, pronunciation, and examples." (sans-serif, 16px, black 70%, center, 12px top, line-height 1.5)
- Button: "Got it" (16px top margin):
  - Background: Black
  - Text: "Got it" (sans-serif, 16px, white, bold)
  - Padding: 14px vertical, full width
  - Border radius: 8px

**Pointer** (Optional visual aid):
- Curved arrow or line pointing from tooltip to the highlighted word "serpiente"
- Stroke: White 60%, 2px width, dashed

**Step Indicator** (Bottom of tooltip, 16px below button):
- Dots row (horizontal, centered, 8px gap):
  - Dot 1: Circle 8px, black (active)
  - Dot 2: Circle 8px, black 30% (inactive)
  - Dot 3: Circle 8px, black 30% (inactive)
- Text below dots: "1 of 3" (sans-serif, 12px, black 50%, center, 8px top)

**Label**: "Screen 7 — Onboarding" (bottom-right of dimmed background, sans-serif, 10px, white 40%)

---

## Screen 8: Sign Up / Account (PRIORITY 4)

**Frame Size**: 375 × 812 (mobile)

### Layout Structure

**Background** (#1A1A1A, full screen)

**Content Container** (Centered vertically, 32px horizontal padding)

**Logo/Brand** (Top, centered):
- App icon placeholder: Circle 80px diameter, white 20% stroke 2px, #2A2A2A fill
- App name: "Wikowí" (serif, 32px, white, bold, center, 16px below icon)
- Tagline: "Read Spanish. Actually understand it." (sans-serif, 16px, white 60%, center, 8px top)

**Sign Up Form** (32px below tagline):
- Heading: "Create Account" (serif, 24px, white, bold, 24px bottom margin)

- Input field 1 (16px bottom margin):
  - Label: "Name" (sans-serif, 14px, white 60%, 8px bottom)
  - Input box:
    - Border: 1px white 40% opacity
    - Border radius: 8px
    - Padding: 16px
    - Placeholder: "María García" (sans-serif, 16px, white 30%)
    - Background: Transparent

- Input field 2 (16px bottom margin):
  - Label: "Email" (sans-serif, 14px, white 60%, 8px bottom)
  - Input box: Same styling as field 1
  - Placeholder: "maria@example.com"

- Input field 3 (16px bottom margin):
  - Label: "Password" (sans-serif, 14px, white 60%, 8px bottom)
  - Input box: Same styling
  - Placeholder: "••••••••"
  - Icon: Eye icon (20px, white 40%, right-aligned inside input, 16px from edge)

**Level Selection** (24px below password):
- Label: "I'm a..." (sans-serif, 14px, white 60%, 12px bottom)
- Radio group (vertical stack, 12px gap):
  - Option 1: 
    - Radio button: Circle 20px, white 40% stroke 2px, selected (filled white)
    - Label: "Complete Beginner" (sans-serif, 16px, white, 12px left of radio)
  - Option 2:
    - Radio button: Circle 20px, white 40% stroke 2px, unselected (empty)
    - Label: "I know some Spanish" (sans-serif, 16px, white 60%, 12px left)
  - Option 3:
    - Radio button: Unselected
    - Label: "Advanced Learner" (sans-serif, 16px, white 60%, 12px left)

**Primary Button** (32px below radio group):
- Background: White
- Text: "Get Started" (sans-serif, 16px, black, bold)
- Padding: 16px vertical, full width
- Border radius: 8px

**Divider** (24px below button):
- Text: "or" (sans-serif, 14px, white 40%, centered)
- Lines: 1px white 20% opacity, extends left and right

**Social Buttons** (16px below divider, vertical stack, 12px gap):
- Google button:
  - Border: 1px white 40% opacity
  - Background: Transparent
  - Border radius: 8px
  - Padding: 14px vertical
  - Layout (horizontal, centered):
    - Google icon placeholder: Square 20px, #3A3A3A
    - Text: "Continue with Google" (sans-serif, 16px, white, 12px left)
  
- Apple button: Same layout
  - Apple icon placeholder: Square 20px, #3A3A3A
  - Text: "Continue with Apple"

**Footer Link** (24px below social buttons, centered):
- Text: "Already have an account? " (sans-serif, 14px, white 60%)
- Link: "Sign In" (sans-serif, 14px, white, underline)

**Label**: "Screen 8 — Sign Up" (bottom-right, sans-serif, 10px, white 40%, 16px margins)

---

## Design Notes

### Spacing System
- Small: 4px, 8px
- Medium: 12px, 16px
- Large: 24px, 32px
- XL: 48px, 64px

### Typography Scale
- Display: 32px (serif, bold)
- Heading 1: 28px (serif, bold)
- Heading 2: 24px (serif, bold)
- Heading 3: 20px (serif, bold)
- Body Large: 18px (serif, regular)
- Body: 16px (serif, regular)
- UI Labels: 14px (sans-serif, regular)
- Caption: 12px (sans-serif, regular)
- Tiny: 10px (sans-serif, regular)

### Grayscale Palette
- Background: #1A1A1A (20% black)
- Surface: #2A2A2A (30% black)
- Surface Variant: #3A3A3A (40% black)
- Text Primary: White 100%
- Text Secondary: White 80%
- Text Tertiary: White 60%
- Text Disabled: White 40%
- Borders: White 20-40% opacity
- Dividers: White 20% opacity

### Border Radius
- Small: 4px
- Medium: 8px
- Large: 12px
- XL: 16px
- Pills: 20-24px
- Circles: 50% / 999px

### Auto Layout Guidelines
- Use Auto Layout for all horizontal and vertical stacks
- Set spacing between items (4px, 8px, 12px, 16px, 24px)
- Use "Space Between" for navigation bars
- Use "Packed" for content areas with consistent gaps
- Set padding on containers (12px, 16px, 24px)

### Component Labeling Convention
- Navigation: "Nav — [Screen Name]"
- Sections: "Section — [Purpose]"
- Cards: "Card — [Content Type]"
- Buttons: "Button — [Action]"
- Inputs: "Input — [Field Name]"
- Icons: "Icon — [Name]"

### Frame Organization
- Name each frame: "Screen [Number] — [Name]"
- Add page indicator in bottom-right corner
- Group related elements with descriptive group names
- Use consistent naming: "Header", "Content", "Footer", etc.

---

## Implementation Checklist

**Priority 1 Screens** (Complete First):
- [ ] Screen 1: Home / Browse
- [ ] Screen 2: Story Detail / Book Page
- [ ] Screen 3: Reader Screen

**Priority 2 Screens**:
- [ ] Screen 4: Archive Home
- [ ] Screen 5: Archive Source Page

**Priority 3 Screens**:
- [ ] Screen 6: Profile / Bookshelf
- [ ] Screen 7: Onboarding / First Word Tap Tooltip

**Priority 4 Screens**:
- [ ] Screen 8: Sign Up / Account

**Design Verification**:
- [ ] All screens use dark gray background (#1A1A1A)
- [ ] All text is white with appropriate opacity
- [ ] No colors, photos, or images used
- [ ] All shapes are simple rectangles/circles
- [ ] Typography follows serif (body) / sans-serif (UI) rule
- [ ] Auto Layout applied to all rows and lists
- [ ] Each screen clearly labeled
- [ ] Spacing follows 4px/8px/12px/16px/24px/32px system
- [ ] Border radius consistent across similar elements
- [ ] All interactive elements have visual indicators (borders, backgrounds)
