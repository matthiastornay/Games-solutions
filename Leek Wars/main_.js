include("vars");
include("api");

_initReachablesCellsTabs(tab_cells_me, getCell());

_determineReachablesAndUnreachablesCells(tab_cells_me, tab_cells_to_ignore_me, getTotalMP());

_determineSafeCellsAmongReachablesOneSTab(tab_cells_me, enemy, tab_cells_to_escape);

mark(tab_cells_to_ignore_me, COLOR_RED);
mark(tab_cells_me, COLOR_BLUE);
mark(tab_cells_to_escape, COLOR_GREEN);

moveTowardCells(tab_cells_to_escape);

_debugGetOperations();
