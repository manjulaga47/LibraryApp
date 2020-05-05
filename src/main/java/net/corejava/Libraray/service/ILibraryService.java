package net.corejava.Libraray.service;

import java.util.List;
import java.util.Map;
import java.util.Optional;

import net.corejava.Libraray.model.Library;

public interface ILibraryService {
	public Iterable<Library> findall();
	
	public Optional<Library> findById(int id);
	
	public List<Map<Integer,String>> findIdAndName();
}
