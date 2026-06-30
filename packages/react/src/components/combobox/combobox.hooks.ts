"use client"

import { Combobox } from "@base-ui/react/combobox"

/**
 * Matches items against a query using `Intl.Collator` for robust string matching.
 */
export const useComboboxFilter = Combobox.useFilter

/**
 * Returns the internally filtered items.
 */
export const useComboboxFilteredItems = Combobox.useFilteredItems