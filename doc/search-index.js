var searchIndex = {};
searchIndex['itertools'] = {"items":[[0,"","itertools","Itertools — extra iterator adaptors, functions and macros",null,null],[3,"Interleave","","Alternate elements from two iterators until both\nare run out",null,null],[3,"Product","","An iterator adaptor that iterates over the cartesian product of\nthe element sets of two iterators **I** and **J**.",null,null],[3,"PutBack","","An iterator adaptor that allows putting back a single\nitem to the front of the iterator.",null,null],[3,"FnMap","","Clonable iterator adaptor to map elementwise\nfrom `Iterator<A>` to `Iterator<B>`",null,null],[3,"Dedup","","Remove duplicates from sections of consecutive identical elements.\nIf the iterator is sorted, all elements will be unique.",null,null],[3,"Batching","","A “meta iterator adaptor”. Its closure recives a reference to the iterator\nand may pick off as many elements as it likes, to produce the next iterator element.",null,null],[3,"GroupBy","","Group iterator elements. Consecutive elements that map to the same key (\"runs\"),\nare returned as the iterator elements of `GroupBy`.",null,null],[3,"Step","","An iterator adaptor that steps a number elements in the base iterator\nfor each iteration.",null,null],[3,"Merge","","An iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",null,null],[3,"MultiPeek","","An Iterator adaptor that allows the user to peek at multiple *.next()* values without advancing itself.",null,null],[3,"Intersperse","","An iterator adaptor to insert a particular value\nbetween each element of the adapted iterator.",null,null],[3,"ISlice","","A sliced iterator.",null,null],[3,"RcIter","","A wrapper for `Rc<RefCell<I>>`, that implements the `Iterator` trait.",null,null],[12,"rciter","","The boxed iterator.",0,null],[3,"Stride","","Stride is similar to the slice iterator, but with a certain number of steps\n(the stride) skipped per iteration.",null,null],[3,"StrideMut","","StrideMut is like Stride, but with mutable elements.",null,null],[3,"Tee","","One half of an iterator pair where both return the same elements.",null,null],[3,"Times","","Iterator to repeat a simple number of times",null,null],[3,"Linspace","","An iterator of a sequence of evenly spaced floats.",null,null],[3,"ZipLongest","","An iterator which iterates two other iterators simultaneously",null,null],[3,"Zip","","Create an iterator running multiple iterators in lockstep.",null,null],[4,"EitherOrBoth","","A value yielded by `ZipLongest`.\nContains one or two values,\ndepending on which of the input iterators are exhausted.",null,null],[13,"Both","","Neither input iterator is exhausted yet, yielding two values.",1,null],[13,"Left","","The parameter iterator of `.zip_longest()` is exhausted,\nonly yielding a value from the `self` iterator.",1,null],[13,"Right","","The `self` iterator of `.zip_longest()` is exhausted,\nonly yielding a value from the parameter iterator.",1,null],[5,"times","","Return an iterator with `n` elements, for simple repetition\na particular number of times. The iterator yields a counter.",null,{"inputs":[{"name":"usize"}],"output":{"name":"times"}}],[5,"linspace","","Return an iterator with `n` elements, where the first\nelement is `a` and the last element is `b`.",null,{"inputs":[{"name":"f"},{"name":"f"},{"name":"usize"}],"output":{"name":"linspace"}}],[5,"write","","**Deprecated: Use *.set_from()* instead**.",null,{"inputs":[{"name":"i"},{"name":"j"}],"output":{"name":"usize"}}],[11,"clone","","",2,{"inputs":[{"name":"interleave"}],"output":{"name":"interleave"}}],[11,"new","","",2,{"inputs":[{"name":"interleave"},{"name":"i"},{"name":"j"}],"output":{"name":"interleave"}}],[11,"next","","",2,{"inputs":[{"name":"interleave"}],"output":{"name":"option"}}],[11,"new","","",3,null],[11,"next","","",3,{"inputs":[{"name":"fnmap"}],"output":{"name":"option"}}],[11,"size_hint","","",3,null],[11,"next_back","","",3,{"inputs":[{"name":"fnmap"}],"output":{"name":"option"}}],[11,"clone","","",3,{"inputs":[{"name":"fnmap"}],"output":{"name":"fnmap"}}],[11,"clone","","",4,{"inputs":[{"name":"putback"}],"output":{"name":"putback"}}],[11,"new","","Iterator element type is `A`",4,{"inputs":[{"name":"putback"},{"name":"i"}],"output":{"name":"putback"}}],[11,"put_back","","Put back a single value to the front of the iterator.",4,{"inputs":[{"name":"putback"},{"name":"i"}],"output":null}],[11,"next","","",4,{"inputs":[{"name":"putback"}],"output":{"name":"option"}}],[11,"size_hint","","",4,null],[11,"clone","","",5,{"inputs":[{"name":"product"}],"output":{"name":"product"}}],[11,"new","","Create a new cartesian product iterator",5,{"inputs":[{"name":"product"},{"name":"i"},{"name":"j"}],"output":{"name":"product"}}],[11,"next","","",5,{"inputs":[{"name":"product"}],"output":{"name":"option"}}],[11,"size_hint","","",5,null],[11,"clone","","",6,{"inputs":[{"name":"dedup"}],"output":{"name":"dedup"}}],[11,"new","","Create a new Dedup Iterator.",6,{"inputs":[{"name":"dedup"},{"name":"i"}],"output":{"name":"dedup"}}],[11,"next","","",6,{"inputs":[{"name":"dedup"}],"output":{"name":"option"}}],[11,"size_hint","","",6,null],[11,"clone","","",7,{"inputs":[{"name":"batching"}],"output":{"name":"batching"}}],[11,"new","","Create a new Batching iterator.",7,{"inputs":[{"name":"batching"},{"name":"i"},{"name":"f"}],"output":{"name":"batching"}}],[11,"next","","",7,{"inputs":[{"name":"batching"}],"output":{"name":"option"}}],[11,"size_hint","","",7,null],[11,"clone","","",8,{"inputs":[{"name":"groupby"}],"output":{"name":"groupby"}}],[11,"new","","Create a new GroupBy iterator.",8,{"inputs":[{"name":"groupby"},{"name":"i"},{"name":"f"}],"output":{"name":"groupby"}}],[11,"next","","",8,{"inputs":[{"name":"groupby"}],"output":{"name":"option"}}],[11,"size_hint","","",8,null],[11,"clone","","",9,{"inputs":[{"name":"step"}],"output":{"name":"step"}}],[11,"new","","Create a **Step** iterator.",9,{"inputs":[{"name":"step"},{"name":"i"},{"name":"usize"}],"output":{"name":"step"}}],[11,"next","","",9,{"inputs":[{"name":"step"}],"output":{"name":"option"}}],[11,"size_hint","","",9,null],[11,"new","","Create a **Merge** iterator.",10,{"inputs":[{"name":"merge"},{"name":"i"},{"name":"j"}],"output":{"name":"merge"}}],[11,"next","","",10,{"inputs":[{"name":"merge"}],"output":{"name":"option"}}],[11,"size_hint","","",10,null],[11,"clone","","",11,{"inputs":[{"name":"multipeek"}],"output":{"name":"multipeek"}}],[11,"new","","Create a **MultiPeek** iterator.",11,{"inputs":[{"name":"multipeek"},{"name":"i"}],"output":{"name":"multipeek"}}],[11,"peek","","Works exactly like *.next()* with the only difference that it doesn't advance itself.\n*.peek()* kann be called multiple times, behaving exactly like *.next()*.",11,{"inputs":[{"name":"multipeek"}],"output":{"name":"option"}}],[11,"next","","",11,{"inputs":[{"name":"multipeek"}],"output":{"name":"option"}}],[11,"size_hint","","",11,null],[11,"clone","","",12,{"inputs":[{"name":"intersperse"}],"output":{"name":"intersperse"}}],[11,"new","","Create a new Intersperse iterator",12,{"inputs":[{"name":"intersperse"},{"name":"i"},{"name":"i"}],"output":{"name":"intersperse"}}],[11,"next","","",12,{"inputs":[{"name":"intersperse"}],"output":{"name":"option"}}],[11,"size_hint","","",12,null],[11,"clone","","",13,{"inputs":[{"name":"islice"}],"output":{"name":"islice"}}],[11,"new","","",13,{"inputs":[{"name":"islice"},{"name":"i"},{"name":"r"}],"output":{"name":"islice"}}],[11,"next","","",13,{"inputs":[{"name":"islice"}],"output":{"name":"option"}}],[11,"next","","",14,{"inputs":[{"name":"linspace"}],"output":{"name":"option"}}],[0,"misc","","A module of helper traits and iterators that are not intended to be used\ndirectly.",null,null],[3,"FlatTuples","itertools::misc","A helper iterator that maps an iterator of tuples like\n`((A, B), C)` to an iterator of `(A, B, C)`.",null,null],[8,"AppendTuple","","A helper trait for (x,y,z) ++ w => (x,y,z,w),\nused for implementing `iproduct!` and `izip!`",null,null],[16,"Result","itertools::misc::AppendTuple","",null,null],[10,"append","itertools::misc","",15,{"inputs":[{"name":"appendtuple"},{"name":"x"}],"output":{"name":"result"}}],[8,"GenericRange","","**GenericRange** is implemented by Rust's built-in range types, produced\nby range syntax like `a..`, `..b` or `c..d`.",null,null],[11,"start","","Start index (inclusive)",16,{"inputs":[{"name":"genericrange"}],"output":{"name":"option"}}],[11,"end","","End index (exclusive)",16,{"inputs":[{"name":"genericrange"}],"output":{"name":"option"}}],[8,"ToFloat","","",null,null],[10,"to_float","","",17,{"inputs":[{"name":"tofloat"}],"output":{"name":"f"}}],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[6,"Result","","",null,null],[11,"clone","","",18,{"inputs":[{"name":"flattuples"}],"output":{"name":"flattuples"}}],[11,"new","","Create a new **FlatTuples**.",18,{"inputs":[{"name":"flattuples"},{"name":"i"}],"output":{"name":"flattuples"}}],[6,"Item","","",null,null],[11,"next","","",18,{"inputs":[{"name":"flattuples"}],"output":{"name":"option"}}],[11,"size_hint","","",18,null],[11,"next_back","","",18,{"inputs":[{"name":"flattuples"}],"output":{"name":"option"}}],[11,"start","core::ops","",19,{"inputs":[{"name":"rangefrom"}],"output":{"name":"option"}}],[11,"end","","",20,{"inputs":[{"name":"rangeto"}],"output":{"name":"option"}}],[11,"start","","",21,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"end","","",21,{"inputs":[{"name":"range"}],"output":{"name":"option"}}],[11,"new","itertools","Create a new RcIter.",0,{"inputs":[{"name":"rciter"},{"name":"i"}],"output":{"name":"rciter"}}],[11,"clone","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"rciter"}}],[11,"next","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"option"}}],[11,"size_hint","","",0,null],[11,"next_back","","",0,{"inputs":[{"name":"rciter"}],"output":{"name":"option"}}],[11,"from_ptr_len","","Create a Stride iterator from a raw pointer.",22,null],[11,"from_ptr_len","","Create a StrideMut iterator from a raw pointer.",23,null],[11,"from_slice","","Create Stride iterator from a slice and the element step count.",22,null],[11,"from_stride","","Create Stride iterator from an existing Stride iterator",22,{"inputs":[{"name":"stride"},{"name":"stride"},{"name":"isize"}],"output":{"name":"stride"}}],[11,"swap_ends","","Swap the begin and end and reverse the stride,\nin effect reversing the iterator.",22,{"inputs":[{"name":"stride"}],"output":null}],[11,"len","","Return the number of elements in the iterator.",22,{"inputs":[{"name":"stride"}],"output":{"name":"usize"}}],[11,"next","","",22,{"inputs":[{"name":"stride"}],"output":{"name":"option"}}],[11,"size_hint","","",22,null],[11,"next_back","","",22,{"inputs":[{"name":"stride"}],"output":{"name":"option"}}],[11,"index","","Return a reference to the element at a given index.",22,{"inputs":[{"name":"stride"},{"name":"usize"}],"output":{"name":"a"}}],[11,"fmt","","",22,{"inputs":[{"name":"stride"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"from_slice","","Create Stride iterator from a slice and the element step count.",23,null],[11,"from_stride","","Create Stride iterator from an existing Stride iterator",23,{"inputs":[{"name":"stridemut"},{"name":"stridemut"},{"name":"isize"}],"output":{"name":"stridemut"}}],[11,"swap_ends","","Swap the begin and end and reverse the stride,\nin effect reversing the iterator.",23,{"inputs":[{"name":"stridemut"}],"output":null}],[11,"len","","Return the number of elements in the iterator.",23,{"inputs":[{"name":"stridemut"}],"output":{"name":"usize"}}],[11,"next","","",23,{"inputs":[{"name":"stridemut"}],"output":{"name":"option"}}],[11,"size_hint","","",23,null],[11,"next_back","","",23,{"inputs":[{"name":"stridemut"}],"output":{"name":"option"}}],[11,"index","","Return a reference to the element at a given index.",23,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"a"}}],[11,"fmt","","",23,{"inputs":[{"name":"stridemut"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"clone","","",22,{"inputs":[{"name":"stride"}],"output":{"name":"stride"}}],[11,"index_mut","","Return a mutable reference to the element at a given index.",23,{"inputs":[{"name":"stridemut"},{"name":"usize"}],"output":{"name":"a"}}],[11,"next","","",24,{"inputs":[{"name":"tee"}],"output":{"name":"option"}}],[11,"size_hint","","",24,null],[11,"clone","","",25,{"inputs":[{"name":"times"}],"output":{"name":"times"}}],[11,"next","","",25,{"inputs":[{"name":"times"}],"output":{"name":"option"}}],[11,"size_hint","","",25,null],[11,"next_back","","",25,{"inputs":[{"name":"times"}],"output":{"name":"option"}}],[11,"clone","","",26,{"inputs":[{"name":"ziplongest"}],"output":{"name":"ziplongest"}}],[11,"new","","Create a new ZipLongest iterator.",26,{"inputs":[{"name":"ziplongest"},{"name":"t"},{"name":"u"}],"output":{"name":"ziplongest"}}],[11,"next","","",26,{"inputs":[{"name":"ziplongest"}],"output":{"name":"option"}}],[11,"size_hint","","",26,null],[11,"next_back","","",26,{"inputs":[{"name":"ziplongest"}],"output":{"name":"option"}}],[11,"fmt","","",1,{"inputs":[{"name":"eitherorboth"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"eq","","",1,{"inputs":[{"name":"eitherorboth"},{"name":"eitherorboth"}],"output":{"name":"bool"}}],[11,"ne","","",1,{"inputs":[{"name":"eitherorboth"},{"name":"eitherorboth"}],"output":{"name":"bool"}}],[11,"clone","","",1,{"inputs":[{"name":"eitherorboth"}],"output":{"name":"eitherorboth"}}],[11,"clone","","",27,{"inputs":[{"name":"zip"}],"output":{"name":"zip"}}],[11,"new","","Create a new **Zip** from a tuple of iterators.",27,{"inputs":[{"name":"zip"},{"name":"t"}],"output":{"name":"zip"}}],[11,"next","","",27,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",27,null],[11,"next","","",27,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",27,null],[11,"next","","",27,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",27,null],[11,"next","","",27,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",27,null],[11,"next","","",27,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",27,null],[11,"next","","",27,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",27,null],[11,"next","","",27,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",27,null],[11,"next","","",27,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",27,null],[11,"next","","",27,{"inputs":[{"name":"zip"}],"output":{"name":"option"}}],[11,"size_hint","","",27,null],[8,"TrustedIterator","","A **TrustedIterator** has exact size, always.",null,null],[8,"Itertools","","Extra iterator methods for arbitrary iterators",null,null],[11,"fn_map","","Like regular *.map()*, but using a simple function pointer instead,\nso that the resulting **FnMap** iterator value can be cloned.",28,null],[11,"interleave","","Alternate elements from two iterators until both\nare run out",28,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"interleave"}}],[11,"intersperse","","An iterator adaptor to insert a particular value\nbetween each element of the adapted iterator.",28,{"inputs":[{"name":"itertools"},{"name":"item"}],"output":{"name":"intersperse"}}],[11,"zip_longest","","Creates an iterator which iterates over both this and the specified\niterators simultaneously, yielding pairs of two optional elements.\nWhen both iterators return None, all further invocations of next() will\nreturn None.",28,{"inputs":[{"name":"itertools"},{"name":"u"}],"output":{"name":"ziplongest"}}],[11,"dedup","","Remove duplicates from sections of consecutive identical elements.\nIf the iterator is sorted, all elements will be unique.",28,{"inputs":[{"name":"itertools"}],"output":{"name":"dedup"}}],[11,"batching","","A “meta iterator adaptor”. Its closure recives a reference to the iterator\nand may pick off as many elements as it likes, to produce the next iterator element.",28,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"batching"}}],[11,"group_by","","Group iterator elements. Consecutive elements that map to the same key (“runs”),\nare returned as the iterator elements of **GroupBy**.",28,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":{"name":"groupby"}}],[11,"tee","","Split into an iterator pair that both yield all elements from\nthe original iterator.",28,null],[11,"slice","","Return a sliced iterator.",28,{"inputs":[{"name":"itertools"},{"name":"r"}],"output":{"name":"islice"}}],[11,"into_rc","","Return an iterator inside a **Rc\\<RefCell\\<_\\>\\>** wrapper.",28,{"inputs":[{"name":"itertools"}],"output":{"name":"rciter"}}],[11,"step","","Return an iterator adaptor that steps **n** elements in the base iterator\nfor each iteration.",28,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"step"}}],[11,"merge","","Return an iterator adaptor that merges the two base iterators in ascending order.\nIf both base iterators are sorted (ascending), the result is sorted.",28,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"merge"}}],[11,"cartesian_product","","Return an iterator adaptor that iterates over the cartesian product of\nthe element sets of two iterators **self** and **J**.",28,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"product"}}],[11,"find_position","","Find the position and value of the first element satisfying a predicate.",28,{"inputs":[{"name":"itertools"},{"name":"p"}],"output":{"name":"option"}}],[11,"dropn","","Consume the first **n** elements of the iterator eagerly.",28,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"usize"}}],[11,"dropping","","Consume the first **n** elements from the iterator eagerly,\nand return the same iterator again.",28,{"inputs":[{"name":"itertools"},{"name":"usize"}],"output":{"name":"self"}}],[11,"drain","","**Deprecated: because of a name clash, use .count() or .foreach() instead as appropriate.**",28,{"inputs":[{"name":"itertools"}],"output":null}],[11,"apply","","**Deprecated: Use *.foreach()* instead.**",28,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":null}],[11,"foreach","","Run the closure **f** eagerly on each element of the iterator.",28,{"inputs":[{"name":"itertools"},{"name":"f"}],"output":null}],[11,"collect_vec","","**.collect_vec()** is simply a type specialization of **.collect()**,\nfor convenience.",28,{"inputs":[{"name":"itertools"}],"output":{"name":"vec"}}],[11,"set_from","","Assign to each reference in **self** from the **from** iterator,\nstopping at the shortest of the two iterators.",28,{"inputs":[{"name":"itertools"},{"name":"j"}],"output":{"name":"usize"}}],[11,"to_string_join","","**Deprecated: Use *.join()* instead, it's more efficient.**.",28,{"inputs":[{"name":"itertools"},{"name":"str"}],"output":{"name":"string"}}],[11,"join","","Combine all iterator elements into one String, seperated by **sep**.",28,{"inputs":[{"name":"itertools"},{"name":"str"}],"output":{"name":"string"}}],[11,"multipeek","","Returns an iterator adapter that allows peeking multiple values.",28,{"inputs":[{"name":"itertools"}],"output":{"name":"multipeek"}}],[14,"iproduct!","","Create an iterator over the “cartesian product” of iterators.",null,null],[14,"izip!","","**Deprecated: use *Zip::new* instead.**",null,null],[14,"icompr!","","`icompr` as in “iterator comprehension” allows creating a\nmapped iterator with simple syntax, similar to set builder notation,\nand directly inspired by Python. Supports an optional filter clause.",null,null]],"paths":[[3,"RcIter"],[4,"EitherOrBoth"],[3,"Interleave"],[3,"FnMap"],[3,"PutBack"],[3,"Product"],[3,"Dedup"],[3,"Batching"],[3,"GroupBy"],[3,"Step"],[3,"Merge"],[3,"MultiPeek"],[3,"Intersperse"],[3,"ISlice"],[3,"Linspace"],[8,"AppendTuple"],[8,"GenericRange"],[8,"ToFloat"],[3,"FlatTuples"],[3,"RangeFrom"],[3,"RangeTo"],[3,"Range"],[3,"Stride"],[3,"StrideMut"],[3,"Tee"],[3,"Times"],[3,"ZipLongest"],[3,"Zip"],[8,"Itertools"]]};
initSearch(searchIndex);
