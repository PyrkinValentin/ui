"use client"

import { Autocomplete } from "@base-ui/react/autocomplete"

/**
 * Matches items against a query using `Intl.Collator` for robust string matching.
 */
export const useAutocompleteFilter = Autocomplete.useFilter

/**
 * Returns the internally filtered items.
 */
export const useAutocompleteFilteredItems = Autocomplete.useFilteredItems