var searchIndex = JSON.parse('{\
"tree_sitter_facade":{"doc":"","t":[3,3,3,3,3,3,6,6,3,12,3,3,3,3,12,3,3,3,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11,11],"n":["IncludedRangesError","QueryError","LanguageError","ParserError","InputEdit","Language","LogType","Logger","LoggerReturn","inner","Node","Parser","Point","Query","inner","Range","Tree","TreeCursor","from","into","to_string","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_string","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_string","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_string","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","to_string","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","to_owned","clone_into","borrow","borrow_mut","try_from","try_into","type_id","from","into","borrow","borrow_mut","try_from","try_into","type_id","from","from","from","from","from","from","from","from","from","from","from","from","clone","clone","clone","clone","clone","clone","default","default","default","eq","ne","eq","ne","eq","ne","eq","ne","eq","ne","eq","ne","eq","ne","eq","ne","eq","ne","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","fmt","hash","new","new_end_byte","new_end_position","old_end_byte","old_end_position","start_byte","start_position","field_count","field_id_for_name","field_name_for_id","id_for_node_kind","node_kind_count","node_kind_for_id","node_kind_is_named","node_kind_is_visible","version","byte_range","child","child_by_field_id","child_by_field_name","child_count","children","children_by_field_id","children_by_field_name","descendant_for_byte_range","descendant_for_point_range","edit","end_byte","end_position","has_changes","has_error","id","is_error","is_extra","is_missing","is_named","kind","kind_id","language","named_child","named_child_count","named_children","named_descendant_for_byte_range","named_descendant_for_point_range","next_named_sibling","next_sibling","parent","prev_named_sibling","prev_sibling","range","start_byte","start_position","to_sexp","utf8_text","utf16_text","walk","new","cancellation_flag","language","logger","parse","parse_utf16","parse_utf16_with","parse_with","print_dot_graphs","reset","set_cancellation_flag","set_included_ranges","set_language","set_logger","set_timeout_micros","stop_printing_dot_graphs","timeout_micros","new","column","row","new","new","end_byte","end_point","start_byte","start_point","edit","changed_ranges","language","root_node","walk","field_id","field_name","goto_first_child","goto_first_child_for_byte","goto_next_sibling","goto_parent","node","reset"],"q":["tree_sitter_facade","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"d":["","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],"i":[0,0,0,0,0,0,0,0,0,1,0,0,0,0,2,0,0,0,3,3,3,3,3,3,3,3,4,4,4,4,4,4,4,4,5,5,5,5,5,5,5,5,6,6,6,6,6,6,6,6,7,7,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,1,1,1,1,1,1,1,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,11,11,11,11,11,11,11,11,11,11,2,2,2,2,2,2,2,12,12,12,12,12,12,12,12,12,13,13,13,13,13,13,13,13,13,14,14,14,14,14,14,14,3,4,5,7,8,9,10,11,2,12,13,14,7,8,9,11,12,13,7,11,12,3,3,4,4,5,5,6,6,7,7,8,8,9,9,11,11,12,12,3,4,5,6,7,8,9,11,2,12,13,3,4,5,6,11,9,7,7,7,7,7,7,7,8,8,8,8,8,8,8,8,8,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,9,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,10,11,11,11,2,12,12,12,12,12,13,13,13,13,13,14,14,14,14,14,14,14,14],"f":[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["string",3]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[]],[[]],[[]],[[]],[[],["result",4]],[[],["result",4]],[[],["typeid",3]],[[["includedrangeserror",3]]],[[["queryerror",3]]],[[["languageerror",3]]],[[["inputedit",3]]],[[["language",3]]],[[["node",3]]],[[["parser",3]]],[[["point",3]]],[[["query",3]]],[[["range",3]]],[[["tree",3]]],[[["treecursor",3]]],[[],["inputedit",3]],[[],["language",3]],[[],["node",3]],[[],["point",3]],[[],["range",3]],[[],["tree",3]],[[]],[[]],[[]],[[["includedrangeserror",3]],["bool",15]],[[["includedrangeserror",3]],["bool",15]],[[["queryerror",3]],["bool",15]],[[["queryerror",3]],["bool",15]],[[["languageerror",3]],["bool",15]],[[["languageerror",3]],["bool",15]],[[["parsererror",3]],["bool",15]],[[["parsererror",3]],["bool",15]],[[["inputedit",3]],["bool",15]],[[["inputedit",3]],["bool",15]],[[["language",3]],["bool",15]],[[["language",3]],["bool",15]],[[["node",3]],["bool",15]],[[["node",3]],["bool",15]],[[["point",3]],["bool",15]],[[["point",3]],["bool",15]],[[["range",3]],["bool",15]],[[["range",3]],["bool",15]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[["formatter",3]],["result",6]],[[]],[[["u32",15],["point",3]]],[[],["u32",15]],[[],["point",3]],[[],["u32",15]],[[],["point",3]],[[],["u32",15]],[[],["point",3]],[[],["u16",15]],[[],[["option",4],["u16",15]]],[[["u16",15]],[["cow",4],["option",4]]],[[["bool",15],["str",15]],["u16",15]],[[],["u16",15]],[[["u16",15]],[["cow",4],["option",4]]],[[["u16",15]],["bool",15]],[[["u16",15]],["bool",15]],[[],["u32",15]],[[],[["u32",15],["range",3]]],[[["u32",15]],["option",4]],[[["u16",15]],["option",4]],[[],["option",4]],[[],["u32",15]],[[["treecursor",3]]],[[["treecursor",3],["u16",15]]],[[["treecursor",3],["str",15]]],[[["u32",15]],["option",4]],[[["point",3]],["option",4]],[[["inputedit",3]]],[[],["u32",15]],[[],["point",3]],[[],["bool",15]],[[],["bool",15]],[[],["u32",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],["bool",15]],[[],[["cow",4],["str",15]]],[[],["u16",15]],[[],["language",3]],[[["u32",15]],["option",4]],[[],["u32",15]],[[["treecursor",3]]],[[["u32",15]],["option",4]],[[["point",3]],["option",4]],[[],["option",4]],[[],["option",4]],[[],["option",4]],[[],["option",4]],[[],["option",4]],[[],["range",3]],[[],["u32",15]],[[],["point",3]],[[],[["cow",4],["str",15]]],[[],[["cow",4],["result",4],["utf8error",3]]],[[]],[[],["treecursor",3]],[[],[["parsererror",3],["result",4]]],[[],[["atomicusize",3],["option",4]]],[[],[["language",3],["option",4]]],[[],[["option",4],["loggerreturn",3]]],[[["option",4],["tree",3]],[["parsererror",3],["option",4],["result",4]]],[[["option",4],["tree",3]],[["parsererror",3],["option",4],["result",4]]],[[["option",4],["tree",3]],[["parsererror",3],["option",4],["result",4]]],[[["option",4],["tree",3]],[["parsererror",3],["option",4],["result",4]]],[[]],[[]],[[["atomicusize",3],["option",4]]],[[],[["result",4],["includedrangeserror",3]]],[[["language",3]],[["result",4],["languageerror",3]]],[[["option",4],["logger",6]]],[[["f64",15]]],[[]],[[],["f64",15]],[[["u32",15]]],[[],["u32",15]],[[],["u32",15]],[[["language",3],["str",15]],[["result",4],["queryerror",3]]],[[["u32",15],["point",3]]],[[],["u32",15]],[[],["point",3]],[[],["u32",15]],[[],["point",3]],[[["inputedit",3]]],[[["tree",3]]],[[],["language",3]],[[],["node",3]],[[],["treecursor",3]],[[],[["option",4],["u16",15]]],[[],[["cow",4],["option",4]]],[[],["bool",15]],[[["u32",15]],[["u32",15],["option",4]]],[[],["bool",15]],[[],["bool",15]],[[],["node",3]],[[["node",3]]]],"p":[[3,"LoggerReturn"],[3,"Query"],[3,"IncludedRangesError"],[3,"QueryError"],[3,"LanguageError"],[3,"ParserError"],[3,"InputEdit"],[3,"Language"],[3,"Node"],[3,"Parser"],[3,"Point"],[3,"Range"],[3,"Tree"],[3,"TreeCursor"]]}\
}');
initSearch(searchIndex);